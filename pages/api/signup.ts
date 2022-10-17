import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import client from "./_utils/client";

import { generateJWT } from "../../utils/jwt";

import checkMessage from "../../utils/checkMessage";

import {
  InsertUserOneDocument,
  InsertUserOneMutation,
  InsertUserOneMutationVariables,
} from "../../gql/graphql";

const notUnique = checkMessage("Uniqueness violation");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, slug }: { username: string; slug: string } = req.body;

  return client
    .mutation<InsertUserOneMutation, InsertUserOneMutationVariables>(
      InsertUserOneDocument,
      {
        username,
        slug,
      }
    )
    .toPromise()
    .then((result) => {
      if (result?.error) {
        if (notUnique(result.error.graphQLErrors)) {
          return res.status(200).json({ message: "EXISTS" });
        } else {
          console.log("Bad Query", result.error.graphQLErrors);
          return res.status(200).json({ message: "BAD_QUERY" });
        }
      } else {
        const user = result.data?.insert_user_one;
        if (!user) return res.status(400).json({ message: "BROKEN_GRAPHQL" });

        const token = generateJWT({
          otherClaims: {
            "X-Hasura-User-Id": user.id.toString(),
            "X-Hasura-User-Canvas": user.canvas_slug.toString(),
          },
        });

        return res.status(200).json({
          token,
          id: user.id,
          username: user.username,
        });
      }
    })
    .catch((e: any) => {
      console.log("BROKEN_SERVER");
      return res.status(400).json({ code: e.name, message: e.message });
    });
}

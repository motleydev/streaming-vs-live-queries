import Router, { useRouter } from "next/router";
import React from "react";
import {
  CreateCanvasDocument,
  CreateCanvasMutation,
  CreateCanvasMutationVariables,
} from "../gql/graphql";
import { useStore } from "../store/store";
import { client } from "../utils/client";

type Props = {
  slug: string;
};

export default function CreateGameButton({ slug }: Props) {
  const { reload } = useRouter();
  const { canvasToken } = useStore();
  const createCanvas = () => {
    client
      .mutation<CreateCanvasMutation, CreateCanvasMutationVariables>(
        CreateCanvasDocument,
        {
          slug,
        },
        {
          fetchOptions: {
            headers: {
              authorization: `Bearer ${canvasToken}`,
            },
          },
        }
      )
      .toPromise()
      .then((d) => {
        if (d.error) {
          console.log(d.error);
        } else {
          reload();
        }
      });
  };

  return (
    <div>
      <button onClick={createCanvas} className="btn btn-primary">
        Create Canvas
      </button>
    </div>
  );
}

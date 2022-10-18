import React from "react";
import { useStore } from "../store/store";
import NoUserFound from "../components/UserNotFound";
import UserFound from "../components/UserFound";
import {
  Colors_Enum,
  InputMaybe,
  Maybe,
  Shapes_Enum,
  UpsertMessageDocument,
  UpsertMessageMutation,
  UpsertMessageMutationVariables,
} from "../gql/graphql";

import Polygon from "./PolygonSVG";
import Square from "./SquareSvg";
import Circle from "./CircleSvg";
import Triangle from "./TriangleSvg";
import Octagon from "./OctagonSVG";

import { client } from "../utils/client";

type Props = {};

export const SHAPES: Record<Shapes_Enum[number], Function> = {
  square: Square,
  circle: Circle,
  triangle: Triangle,
  octagon: Octagon,
  poly: Polygon,
};

export const COLORS: Record<Colors_Enum[number], string> = {
  red: "text-red-600",
  green: "text-green-400",
  blue: "text-blue-400",
  yellow: "text-yellow-300",
};

export default function UserStatus({}: Props) {
  const { user, message, setMessage } = useStore();

  const addColor = ({
    color,
    shape,
  }: {
    color: string;
    shape: InputMaybe<Shapes_Enum>;
  }) => {
    client
      .mutation<UpsertMessageMutation, UpsertMessageMutationVariables>(
        UpsertMessageDocument,
        {
          color: color as InputMaybe<Colors_Enum>,
          shape,
        },
        {
          fetchOptions: {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        }
      )
      .toPromise()
      .then((d) => {
        if (d.error) {
          console.log(d.error);
        } else {
          console.log(d);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="h-full">
      {!user && <NoUserFound />}
      {user && (
        <div className="space-y-6">
          <article className="prose">
            <UserFound />
            <h1>Pick a shape!</h1>
          </article>
          {!message.shape && (
            <div className="text-white flex">
              {Object.keys(SHAPES).map((shape: Shapes_Enum[number], index) => {
                return (
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setMessage({ shape: shape as Maybe<Shapes_Enum> });
                    }}
                    key={index}
                  >
                    {SHAPES[shape]()}
                  </div>
                );
              })}
            </div>
          )}

          {message.shape && (
            <div className="flex flex-wrap gap-6">
              {Object.keys(COLORS).map((color, index) => {
                return (
                  <div
                    onClick={() => {
                      addColor({
                        color,
                        shape: message.shape as InputMaybe<Shapes_Enum>,
                      });
                    }}
                    className={`${COLORS[color]} cursor-pointer w-48 h-48`}
                    key={index}
                  >
                    <article className="prose justify-center flex">
                      <h2>{color}</h2>
                    </article>
                    {SHAPES[message.shape!]()}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

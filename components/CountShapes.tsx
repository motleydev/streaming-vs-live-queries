import React, { useEffect, useState } from "react";
import {
  Canvas_Message_Aggregate,
  InputMaybe,
  ShapesAggregateDocument,
  ShapesAggregateSubscription,
  ShapesAggregateSubscriptionVariables,
  Shapes_Enum,
} from "../gql/graphql";
import { pipe, subscribe } from "wonka";
import { useStore } from "../store/store";
import { client } from "../utils/client";
import { SHAPES } from "./UserStatus";

type Props = {};

type Aliased =
  | Record<string, ShapesAggregateSubscription["canvas"][number]["circle"]>
  | undefined;

export default function CountShapes({}: Props) {
  const [items, setItems] = useState<Aliased>();
  const { canvasToken } = useStore();

  useEffect(() => {
    const { unsubscribe } = pipe(
      client.subscription<
        ShapesAggregateSubscription,
        ShapesAggregateSubscriptionVariables
      >(
        ShapesAggregateDocument,
        {
          circle: "circle" as InputMaybe<Shapes_Enum>,
          square: "square" as InputMaybe<Shapes_Enum>,
          triangle: "triangle" as InputMaybe<Shapes_Enum>,
          octagon: "octagon" as InputMaybe<Shapes_Enum>,
          poly: "poly" as InputMaybe<Shapes_Enum>,
        },
        {
          fetchOptions: {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiY2FudmFzIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImNhbnZhcyJ9LCJpYXQiOjE2NjYwNTEzMDh9.3M6gXxOFTHeNwjIWQXcuORB1b0zCuVPPdidVRDH2MiU`,
            },
          },
        }
      ),
      subscribe((result) => {
        if (result.error) {
          console.log(result.error);
        }
        setItems(result?.data?.canvas[0] as Aliased);
      })
    );

    return unsubscribe;
  }, []);
  return (
    <div className="flex gap-x-6">
      {items &&
        Object.keys(items).map((item) => {
          return (
            <div key={item} className="flex gap-x-4">
              <div className="w-6 h-6">{SHAPES[item]()}</div>
              {items[item].aggregate?.count}
            </div>
          );
        })}
    </div>
  );
}

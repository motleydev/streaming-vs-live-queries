import React, { useEffect, useState } from "react";
import {
  ColorsAggregateDocument,
  ColorsAggregateSubscription,
  ColorsAggregateSubscriptionVariables,
  Colors_Enum,
  InputMaybe,
} from "../gql/graphql";
import { COLORS } from "./UserStatus";
import { pipe, subscribe } from "wonka";
import { useStore } from "../store/store";
import { client } from "../utils/client";

type Props = {
  slug: string;
};

type Aliased =
  | Record<string, ColorsAggregateSubscription["canvas"][number]["red"]>
  | undefined;

export default function CountColors({ slug }: Props) {
  const [items, setItems] = useState<Aliased>();
  const { canvasToken } = useStore();

  useEffect(() => {
    const { unsubscribe } = pipe(
      client.subscription<
        ColorsAggregateSubscription,
        ColorsAggregateSubscriptionVariables
      >(
        ColorsAggregateDocument,
        {
          red: "red" as InputMaybe<Colors_Enum>,
          green: "green" as InputMaybe<Colors_Enum>,
          blue: "blue" as InputMaybe<Colors_Enum>,
          yellow: "yellow" as InputMaybe<Colors_Enum>,
          slug,
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
              <div className={`w-6 h-6 ${COLORS[item]} bg-current`} />
              {items[item].aggregate?.count}
            </div>
          );
        })}
    </div>
  );
}

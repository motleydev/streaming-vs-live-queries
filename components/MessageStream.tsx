// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  EventStreamDocument,
  EventStreamSubscription,
  EventStreamSubscriptionVariables,
} from "../gql/graphql";
import { pipe, subscribe } from "wonka";
import { client } from "../utils/client";

import { formatISO } from "date-fns";
import { useStore } from "../store/store";
import { SHAPES } from "./UserStatus";

type Props = {
  slug: string;
};

export default function MessageStream({ slug }: Props) {
  const [items, setItems] = useState<
    EventStreamSubscription["canvas_message_stream"]
  >([]);
  const { canvasToken } = useStore();

  useEffect(() => {
    const { unsubscribe } = pipe(
      client.subscription<
        EventStreamSubscription,
        EventStreamSubscriptionVariables
      >(
        EventStreamDocument,
        {
          date: formatISO(new Date()),
          slug,
        },
        {
          fetchOptions: {
            headers: {
              authorization: `Bearer ${canvasToken}`,
            },
          },
        }
      ),
      subscribe((result) => {
        if (result.error) {
          console.log(result.error);
        }
        setItems((items) => {
          [...items, ...result.data?.canvas_message_stream];
        });
      })
    );

    return unsubscribe;
  }, []);
  return (
    <div className="flex gap-x-6">
      {items &&
        items.map((item, index) => {
          return (
            <div key={index} className="flex gap-x-4">
              <div className="w-6 h-6">{SHAPES[item.shape!]()}</div>
            </div>
          );
        })}
    </div>
  );
}

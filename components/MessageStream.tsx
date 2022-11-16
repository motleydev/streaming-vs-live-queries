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
import { COLORS, SHAPES } from "./UserStatus";

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
          date: "2022-10-17T17:32:22.804353+00:00", //formatISO(new Date()),
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
          const oldData = items ? items : [];
          const newData = result.data?.canvas_message_stream
            ? result.data?.canvas_message_stream
            : [];
          return [...oldData, ...newData];
        });
      })
    );

    return unsubscribe;
  }, [canvasToken]);
  return (
    <div className="flex gap-x-6 gap-y-6 flex-wrap">
      {items &&
        items.map((item, index) => {
          const classColor = item.color ? COLORS[item.color] : "text-white";
          return (
            <div key={index} className={`${classColor} flex gap-x-4`}>
              <div className="w-6 h-6">{SHAPES[item.shape!]()}</div>
            </div>
          );
        })}
    </div>
  );
}

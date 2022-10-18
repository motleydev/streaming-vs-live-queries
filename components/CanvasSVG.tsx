import React, { useEffect, useState } from "react";
import { pipe, subscribe } from "wonka";
import {
  GetAllMessagesDocument,
  GetAllMessagesSubscription,
  GetAllMessagesSubscriptionVariables,
} from "../gql/graphql";
import { useStore } from "../store/store";
import { client } from "../utils/client";

type Props = {
  slug: string;
};

export default function CanvasSVG({ slug }: Props) {
  const [items, setItems] = useState<GetAllMessagesSubscription>();
  const { canvasToken } = useStore();

  useEffect(() => {
    const { unsubscribe } = pipe(
      client.subscription<
        GetAllMessagesSubscription,
        GetAllMessagesSubscriptionVariables
      >(
        GetAllMessagesDocument,
        {
          canvas_slug: slug,
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
        setItems(result?.data);
      })
    );

    // return unsubscribe;
  }, [slug, canvasToken]);

  return <div>{JSON.stringify(items)}</div>;
}
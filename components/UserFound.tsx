import React from "react";
import {} from "../gql/graphql";
import { useStore } from "../store/store";

type Props = {};

export default function UserFound({}: Props) {
  const { user, setUser } = useStore();

  return (
    <div>
      <article className="prose mb-4">
        <p>Hello {user.username}!</p>
      </article>
    </div>
  );
}

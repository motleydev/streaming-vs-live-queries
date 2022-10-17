import React from "react";
import { useStore } from "../store/store";
import NoUserFound from "../components/UserNotFound";
import UserFound from "../components/UserFound";
import Shapes from "./Shapes";

type Props = {};

export default function UserStatus({}: Props) {
  const { user } = useStore();
  return (
    <div className="h-full">
      {!user && <NoUserFound />}
      {user && (
        <div className="h-full">
          <UserFound />
          <p>Pick a shape!</p>

          <Shapes />
        </div>
      )}
    </div>
  );
}

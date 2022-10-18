import React from "react";
import { FormEvent } from "react";
import { useStore } from "../store/store";
import { useRouter } from "next/router";

type Props = {};

export default function RegisterUser({}: Props) {
  const { register } = useStore();

  const { query } = useRouter();
  const slug = typeof query.slug === "string" ? query.slug : "";

  const [username, setName] = React.useState("");
  const submit = (event: FormEvent<Element>) => {
    event.preventDefault();
    register(username, slug);
  };

  console.log(query);
  return (
    <form onSubmit={submit} className="space-y-4 space-x-4 p-4">
      <p>{"What's your username?"}</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required={true}
        placeholder={"Max Mustermann"}
        value={username}
        className="input input-bordered w-full max-w-xs block"
      />
      <button className="btn btn-secondary mt-6" type="submit">
        {"Let's Play"}
      </button>
    </form>
  );
}

// "Uniqueness violation"

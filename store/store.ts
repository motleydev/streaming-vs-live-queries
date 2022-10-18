import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import Cookies from "js-cookie";
import Router from "next/router";

import { User, Canvas_Message } from "../gql/graphql";

import { GraphQLError } from "graphql";

const COOKIE_STRING = "canvas-game-user-id";

const errorPick = (error: string) => (errorArray: GraphQLError[]) =>
  errorArray.filter(({ message }) => message.includes(error)).length > 0;

const notUniqueError = errorPick("Uniqueness violation");

export enum AUTH {
  AUTHED = "authed",
  NOT_AUTHED = "not_authed",
}

export enum FORMSTATUS {
  PRISTINE = "pristine",
  ERROR = "error",
  EXISTS = "exists",
  SUCCESS = "success",
  LOADING = "loading",
}

interface LocalUser extends Partial<User> {
  authed: AUTH;
  token?: string;
}

interface CanvasGame {
  user: LocalUser;
  formStatus: FORMSTATUS;
  message: Partial<Canvas_Message>;
  canvasToken: string;
  register: (username: string, slug: string) => void;
  logOut: () => void;
  setUser: (user: LocalUser) => void;
  setMessage: (message: Partial<Canvas_Message>) => void;
  setCanvasToken: (message: string) => void;
}

const useStore = create<CanvasGame>()(
  devtools(
    persist(
      (set, get) => ({
        user: { authed: AUTH.NOT_AUTHED },
        canvasToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiY2FudmFzIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImNhbnZhcyJ9LCJpYXQiOjE2NjYwNTEzMDh9.3M6gXxOFTHeNwjIWQXcuORB1b0zCuVPPdidVRDH2MiU",
        formStatus: FORMSTATUS.PRISTINE,
        message: {},
        setMessage: (payload) => {
          set({ message: { ...get().message, ...payload } });
        },
        setCanvasToken: (token) => {
          set({ canvasToken: token });
        },
        setUser: (user) => {
          set({ user });
        },
        logOut: () => {
          set({
            user: { authed: AUTH.NOT_AUTHED },
            formStatus: FORMSTATUS.PRISTINE,
          });
          Cookies.remove(`canvas-${Router.query.slug}`);
          Router.push("/");
        },
        register: (username, slug) => {
          console.log("Signing up user ", username);
          set({ formStatus: FORMSTATUS.LOADING });

          fetch("/api/signup", {
            method: "POST",
            headers: {
              ["Content-Type"]: "application/json",
            },
            body: JSON.stringify({
              username,
              slug,
            }),
          })
            .then((d) => d.json())
            .then((d) => {
              if (d.message) {
                if (d.message === "EXISTS") {
                  set({ formStatus: FORMSTATUS.EXISTS });
                } else {
                  set({ formStatus: FORMSTATUS.ERROR });
                  console.log(d.message);
                }
              } else {
                const { id, username, token } = d;
                Cookies.set(`canvas-${Router.query.slug}`, id as string);
                set({
                  user: { authed: AUTH.AUTHED, id, username, token },
                  formStatus: FORMSTATUS.SUCCESS,
                });
                Router.reload();
              }
            })
            .catch((e) => {
              console.log(e.message);
            });
        },
      }),
      {
        name: `canvas-game-${Router.query.slug}`,
        getStorage: () => localStorage,
      }
    )
  )
);

export { useStore };

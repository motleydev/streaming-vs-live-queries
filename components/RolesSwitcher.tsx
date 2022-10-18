import { useRouter } from "next/router";
import React from "react";
import { useStore } from "../store/store";

type Props = {};

export default function RolesSwitcher({}: Props) {
  const { setCanvasToken } = useStore();
  const { pathname } = useRouter();
  const isCanvas = pathname.includes("canvas");

  return !isCanvas ? (
    <></>
  ) : (
    <div className="navbar-end">
      <select
        className="select w-full max-w-xs"
        defaultValue={
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiY2FudmFzIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImNhbnZhcyJ9LCJpYXQiOjE2NjYwNTEzMDh9.3M6gXxOFTHeNwjIWQXcuORB1b0zCuVPPdidVRDH2MiU"
        }
        onChange={(e) => {
          setCanvasToken(e.target.value);
        }}
      >
        <option value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiY2FudmFzIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImNhbnZhcyJ9LCJpYXQiOjE2NjYwNTEzMDh9.3M6gXxOFTHeNwjIWQXcuORB1b0zCuVPPdidVRDH2MiU">
          Generic
        </option>
        <option value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiY29sb3IiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiY29sb3IiLCJ4LWhhc3VyYS1jb2xvciI6ImdyZWVuIn0sImlhdCI6MTY2NjA1MTU4M30.JItXTy89ewNGDgVwhwOpAoN6PbyoHu7N8lN0VFXFvxI">
          Only Green
        </option>
        <option value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsic2hhcGUiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoic2hhcGUiLCJ4LWhhc3VyYS1zaGFwZSI6ImNpcmNsZSJ9LCJpYXQiOjE2NjYwNTE1Mzh9.DMQU5v5rOzq9gfxOtFC_5AEPy6PcRi3WsE8G_M8eBaY">
          Only Circles
        </option>
        <option value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWxsc2hhcGVzIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImFsbHNoYXBlcyJ9LCJpYXQiOjE2NjYwNTE2NjB9.OY0wTW-v-rMlhMl2dD2T9ANnId0z4HsrCnJh-0EAPeY">
          All Shapes
        </option>
      </select>
    </div>
  );
}

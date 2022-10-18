import React from "react";

type Props = {};

export default function Circle() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className="stroke-current stroke-2 fill-transparent active:fill-neutral transform"
    >
      <circle r={40} cx={"50%"} cy={"50%"} stroke="inherit" fill="inherit" />
    </svg>
  );
}

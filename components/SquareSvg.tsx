import React from "react";

type Props = {};

export default function Square() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className="stroke-current stroke-2 fill-transparent active:fill-neutral transform"
    >
      <rect
        width="80"
        height="80"
        x="10"
        y="10"
        fill="inherit"
        stroke="inherit"
      />
    </svg>
  );
}

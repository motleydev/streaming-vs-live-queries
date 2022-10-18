import React from "react";

type Props = {};

export default function Triangle() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className="stroke-current stroke-2 fill-transparent active:fill-neutral transform"
    >
      <polygon points="50,10 90,90 10,90" fill="inherit" stroke="inherit" />
    </svg>
  );
}

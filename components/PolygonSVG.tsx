import React from "react";

type Props = {};

export default function Polygon() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className="stroke-current stroke-2 fill-transparent active:fill-neutral transform"
    >
      <path d="M52.7609 2.73373C73.6014 7.45414 92.01 18.8387 93.6242 32.6295C95.2019 46.4833 79.9852 62.7432 64.7531 68.0684C49.5573 73.3306 34.2836 67.6219 20.989 54.7355C7.75676 41.8851 -3.55884 21.8209 2.41444 10.8979C8.48657 -0.0519825 31.8215 -1.9597 52.7609 2.73373Z" />
    </svg>
  );
}

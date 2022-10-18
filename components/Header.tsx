import React from "react";
import dynamic from "next/dynamic";

type Props = {};

const DynamicMenu = dynamic(() => import("../components/DynamicMenu"), {
  ssr: false,
});

const DynamicRoleSwitcher = dynamic(
  () => import("../components/RolesSwitcher"),
  {
    ssr: false,
  }
);

export default function Header({}: Props) {
  return (
    <div className="navbar bg-base-100 rounded-xl shadow-xl mt-4 mb-6 sticky top-5 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <DynamicMenu />
        </div>
      </div>
      <DynamicRoleSwitcher />
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router";

function Root() {
  return (
    <div className="max-w-[375px] max-h-[812px] mx-auto  mt-3  bg-[#F7F8F9]">
      <Outlet />
    </div>
  );
}

export default Root;

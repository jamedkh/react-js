import React from "react";
import { NavLink, Outlet } from "react-router";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12 gap-4 ">
      <div className="flex gap-4">
        <NavLink
          to="web-design"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-xl font-medium"
        >
          Web Design
        </NavLink>
        <NavLink
          to="app-development"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-xl font-medium"
        >
          App Development
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Services;

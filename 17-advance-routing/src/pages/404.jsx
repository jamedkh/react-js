import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>
        <p className="text-4xl font-medium text-gray-800">Page Not Found</p>

        <NavLink
          to="/"
          className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-xl text-white hover:bg-blue-700"
        >
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;

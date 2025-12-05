import React from "react";
import { RiMenuLine } from "@remixicon/react";
function Navbar() {
  return (
    <>
      <div className="hidden lg:inline-flex gap-4 font-bold">
        <a
          href="/"
          className="hover:text-(--primary-200) transition-colors duration-300 ease-in-out"
        >
          Benefits
        </a>
        <a
          href="/"
          className="hover:text-(--primary-200) transition-colors duration-300 ease-in-out"
        >
          Specifications
        </a>
        <a
          href="/"
          className="hover:text-(--primary-200) transition-colors duration-300 ease-in-out"
        >
          How-to
        </a>
        <a
          href="/"
          className="hover:text-(--primary-200) transition-colors duration-300 ease-in-out"
        >
          Contact Us
        </a>
      </div>
      <div className="inline-flex lg:hidden gap-4 font-bold">
        <a
          href="/"
          className="hover:text-(--primary-200) transition-colors duration-300 ease-in-out"
        >
          <RiMenuLine />
        </a>
      </div>
    </>
  );
}

export default Navbar;

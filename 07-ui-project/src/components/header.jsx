import React from "react";
import Navbar from "./navbar";
import HeaderBtn from "./header-btn";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 lg:py-8 lg:px-16">
      <a href="/" className="font-medium text-3xl">
        Area
      </a>
      <Navbar />
      <HeaderBtn />
    </div>
  );
}

export default Header;

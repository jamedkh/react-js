import React from "react";
import Navbar from "./navbar";
import HeaderBtn from "./header-btn";

function Header() {
  return (
    <div className="flex items-center justify-between py-8 px-16">
      <a href="/">Area</a>
      <Navbar />
      <HeaderBtn />
    </div>
  );
}

export default Header;

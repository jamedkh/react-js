import React from "react";

function Logos() {
  return (
    <>
      <div className="container mx-auto border-b border-gray-200 mb-20 pb-20">
        <span className="text-gray-500 text-center block lg:text-left">
          Trusted by
        </span>
        <ul className="grid grid-cols-2 lg:grid-cols-6 gap-8 justify-between w-full items-center">
          <li className="text-center">
            <img src="./logo-1.png" alt="logo" className="inline-block" />
          </li>
          <li className="text-center">
            <img src="./logo-2.png" alt="logo" className="inline-block" />
          </li>
          <li className="text-center">
            <img src="./logo-3.png" alt="logo" className="inline-block" />
          </li>
          <li className="text-center">
            <img src="./logo-4.png" alt="logo" className="inline-block" />
          </li>
          <li className="text-center">
            <img src="./logo-5.png" alt="logo" className="inline-block" />
          </li>
          <li className="text-center">
            <img src="./logo-6.png" alt="logo" className="inline-block" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Logos;

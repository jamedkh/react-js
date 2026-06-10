import React from "react";
import { NavLink } from "react-router";

const CardJob = ({ id, title, description, path }) => {
  return (
    <div key={id} className="py-14 px-11 rounded-lg max-w-lg bg-orange-100">
      <h3 className="mb-4 text-black text-[22px] sm:text-[40px] font-extrabold leading-none">
        <span>{title}</span>
      </h3>
      <div className="text-lg text-black leading-[1.8]">
        <p>{description}</p>
      </div>
      <ul className="mt-6 sm:mt-10">
        <li className="pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid">
          <NavLink
            to={path}
            className="flex items-center justify-between text-black hover:text-blue-600 text-lg sm:text-xl font-medium"
          >
            <span>Read More</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.00002 7.45035e-05L13 7.42506e-05C13.5523 7.45035e-05 14 0.44779 14 1.00007V10.0001C14 10.5524 13.5523 11.0001 13 11.0001C12.4477 11.0001 12 10.5524 12 10.0001V3.41429L1.70712 13.7072L0.292908 12.293L10.5858 2.00007L4.00002 2.00007C3.44773 2.00007 3.00002 1.55236 3.00002 1.00007C3.00002 0.44779 3.44773 7.41663e-05 4.00002 7.45035e-05Z"
                fill="black"
              ></path>
            </svg>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CardJob;

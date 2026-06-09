import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <section className="flex justify-center items-center w-full h-16 bg-gray-700">
      <ul className="flex gap-16">
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-blue-500 text-xl font-medium"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-white hover:text-blue-500 text-xl font-medium"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className="text-white hover:text-blue-500 text-xl font-medium"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;

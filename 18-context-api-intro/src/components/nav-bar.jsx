import { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeDataContext } from "../constants/theme-data";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeDataContext);
  console.log(theme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section
      className={`flex justify-center items-center w-full h-16 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-500 text-white"}`}
    >
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
            to="/services"
            className="text-white hover:text-blue-500 text-xl font-medium"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className="text-white hover:text-blue-500 text-xl font-medium"
          >
            Jobs
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

      <button
        className="theme mx-8 p-2 text-white hover:text-blue-500 text-sm font-medium border border-white rounded-lg cursor-pointer"
        onClick={toggleTheme}
      >
        <span>{theme}</span>
      </button>
    </section>
  );
};

export default NavBar;

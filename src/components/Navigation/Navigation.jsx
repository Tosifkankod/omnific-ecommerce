import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [open, setOpen] = useState(false);

  const handleNavbarToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-gray-800 border-gray-700 shadow-md text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://res.cloudinary.com/dzadkuo41/image/upload/v1728882714/mua4nhvbgkrf7g1akxv2.png "
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Omnific Stores
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-white">
          <NavLink
            type="button"
            to={"/cart"}
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </NavLink>
          <button
            onClick={handleNavbarToggle}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={open ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            open ? "" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-800 dark:border-gray-600">
            <li>
              <NavLink
                to={"/"}
                className="block py-2 px-3 md:p-0 bg-blue-600 rounded md:bg-transparent md:text-blue-600 md:dark:text-blue-400"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#"
                to={"about"}
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:text-blue-400 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

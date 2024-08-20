import { useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Box>
      <nav className="relative shadow bg-gray-700">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-lg font-semibold my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
              onClick={handleLinkClick}
            >
              Innovative MedTech
            </Link>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                to="/faq"
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
              <Link
                className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 md:mx-4 md:my-0"
                to="/team"
                onClick={handleLinkClick}
              >
                Team
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;

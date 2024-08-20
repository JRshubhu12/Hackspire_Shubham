import {} from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <footer className="bg-gray-800">
        <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
          <Link
            to="/clinic-login"
            className="text-lg font-semibold transition-colors duration-300 text-gray-200 hover:text-blue-500"
          >
            Innovative MedTech
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <Link
              to="/about"
              className="text-sm transition-colors duration-300 text-gray-200 hover:text-blue-500"
            >
              About
            </Link>

            <Link
              to="/faq"
              className="text-sm transition-colors duration-300 text-gray-200 hover:text-blue-500"
            >
              FAQ
            </Link>

            <Link
              to="/team"
              className="text-sm transition-colors duration-300 text-gray-200 hover:text-blue-500"
            >
              Team
            </Link>
          </div>

          <p className="mt-6 text-xs lg:mt-0 text-gray-400">
            © 2024 Innovative MedTech
          </p>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;

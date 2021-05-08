import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Header({ isBlue, isLogin }) {
  const headerColor = isBlue ? "text-blue-600" : "text-white";

  return (
    <header
      className={[headerColor, "items-center flex justify-between "].join(" ")}
    >
      <div style={{ height: 80 }}>
        <h1 className="text-2xl pt-5">Logo</h1>
      </div>
      <ul className="text-1xl inline-flex">
        <li>
          <Link to="/home" className="py-3 px-6 cursor-pointer hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/home" className="py-3 px-6 cursor-pointer hover:underline">
            Feature
          </Link>
        </li>
        <li>
          <Link to="/home" className="py-3 px-6 cursor-pointer hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/home" className="py-3 px-6 cursor-pointer hover:underline">
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 font-medium text-white py-3 px-6 rounded"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="border-blue-600 border-2 ml-6 font-medium text-white py-3 px-6 rounded"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
Header.propTypes = {
  isBlue: propTypes.bool,
};

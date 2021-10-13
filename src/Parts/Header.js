import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import propTypes from "prop-types";

export default function Header({ isBlue, isLogin, isCentered }) {
  const history = useHistory();
  const [User, setUser] = useState(() => null);
  useEffect(() => {
    const userCookies =
      decodeURIComponent(window.document.cookie)
        .split(";")
        ?.find?.((item) => item.indexOf("user") > -1)
        ?.split("=")[1] ?? null;
    setUser(userCookies ? JSON.parse(userCookies) : null);
  }, [setUser]);

  const headerColor = isBlue ? "text-blue-600" : "text-white";
  if (isCentered) {
    return (
      <header className="w-full items-center text-blue-600 flex justify-center">
        <div style={{ height: 80 }}>
          <h1 className="text-2xl pt-5">Logo</h1>
        </div>
      </header>
    );
  }

  const goToProfile = () => {
    history.push("/myprofile");
  };
  return (
    <header
      className={[
        headerColor,
        "items-center  flex justify-between w-full",
      ].join(" ")}
    >
      <div style={{ height: 80 }}>
        <h1 className="text-2xl pt-5">Logo</h1>
      </div>

      <ul
        className={["text-1xl  ", isLogin ? "hidden" : "md:inline-flex "].join(
          " "
        )}
      >
        <li>
          <Link to="/home" className="py-3 px-6 cursor-pointer hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Feature"
            className="py-3 px-6 cursor-pointer hover:underline"
          >
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
      {User ? (
        <button
          onClick={() => goToProfile()}
          className={[
            "hover:bg-indigo-800 transition-all duration-200  hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center",
            headerColor,
          ].join(" ")}
        >
          <span className="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
            <img
              src={User?.avatar}
              alt={User?.name ?? "Username"}
              className="object-cover w-8 h-8 inline-block"
            />
          </span>
          Hi, {User.name}
        </button>
      ) : (
        <div className="md:inline-flex hidden">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 font-medium text-white py-2 px-6 rounded"
          >
            Register
          </Link>
          <Link
            to="/login"
            className={[
              headerColor,
              "border-blue-600 border-2 ml-6 font-medium  py-2 px-6 rounded",
            ].join(" ")}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
Header.propTypes = {
  isBlue: propTypes.bool,
};

import Header from "Parts/Header";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setAuthorizationHeader } from "../Config/axios";
import { populateProfile } from "Store/actions/users";
import InputText from "Components/Form/InputText";
import LoginImage from "assets/images/loginPage.jpeg";
import users from "Constant/api/users";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const initState = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initState);
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState(null);
  const history = useHistory();
  const submit = () => {
    users
      .login({
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === "error") {
          setError(res.message);
        } else {
          setAuthorizationHeader(res.token);
          users.detail().then((detail) => {
            dispatch(populateProfile(detail.data[0]));

            localStorage.setItem(
              "token",
              JSON.stringify({ ...res, email: state.email })
            );
            const redirect = localStorage.getItem("redirect");
            const userCookies = {
              name: detail.data[0].name,
              avatar: detail.data[0].avatar,
              id: detail.data[0].id,
            };

            const expires = new Date(
              new Date().getTime() + 7 * 24 * 60 * 60 * 1000
            );
            document.cookie = `user=${JSON.stringify(
              userCookies
            )}; expires=${expires.toUTCString()}; path:/; ${
              process.env.REACT_APP_HOST
            }`;
            history.push(redirect || "/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const err =
    typeof error === "object" &&
    error?.reduce((acc, current) => {
      if (current.field) {
        acc[current] = "error";
      }
      return acc;
    });
  console.log(err);
  return (
    <>
      <div className="container mx-auto relative">
        <Header isBlue isLogin></Header>
      </div>
      <div className="flex">
        <div className="w-1/2 -mt-28">
          <img
            src={LoginImage}
            alt="loginPage"
            className="w-full object-cover"
            style={{ height: 700 }}
          />
        </div>
        <div
          className="w-1/2 flex mt-16  
        "
        >
          <div className="flex flex-col ml-32">
            <div>
              <label>Email</label>
              <InputText
                type="email"
                name="email"
                onChange={onChange}
              ></InputText>
            </div>
            <div>
              <label>Password</label>
              <InputText
                type="password"
                name="password"
                onChange={onChange}
              ></InputText>
            </div>{" "}
            <button
              type="submit"
              onClick={() => submit()}
              className="py-3  text-white px-6 bg-blue-700"
            >
              Login
            </button>
            {error && <span className="text-red-500 text-md">{error}</span>}
          </div>
        </div>
      </div>
    </>
  );
}

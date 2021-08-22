import Header from "Parts/Header";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputText from "Components/Form/InputText";
import LoginImage from "assets/images/loginPage.jpeg";
import users from "Constant/api/users";

export default function Register() {
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
      .then((res) => {})
      .catch((err) => {
        setError(err.response.data.message);
      });
  };
  console.log(error);
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
              Register
            </button>
            {error && <span className="text-red-500">{error}</span>}
          </div>
        </div>
      </div>
    </>
  );
}

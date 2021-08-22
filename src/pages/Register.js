import Header from "Parts/Header";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputText from "Components/Form/InputText";
import RegisterImage from "assets/images/RegisterPage.jpeg";
import users from "Constant/api/users";

export default function Register() {
  const initState = {
    name: "",
    profession: "",
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
      .register({
        name: state.name,
        profession: state.profession,
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        if (res.status === "error") {
          setError(res.message);
        } else {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mx-auto relative">
        <Header isBlue isLogin></Header>
      </div>
      <div className="flex">
        <div className="w-1/2 -mt-28">
          <img
            src={RegisterImage}
            alt="register_image"
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
              <label>Full Name</label>
              <InputText name="name" onChange={onChange}></InputText>
            </div>
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
            <div>
              <label>Profession</label>
              <InputText name="profession" onChange={onChange}></InputText>
            </div>
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

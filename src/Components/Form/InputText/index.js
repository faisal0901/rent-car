import React, { useState } from "react";

export default function InputText(props) {
  const { value, type, placeholder, name, defaultError, errors, className } =
    props;
  const [error, seterror] = useState(null);
  let patern = "";
  if (type === "email") {
    patern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }
  if (type === "number") {
    patern = "[0-9]";
  }
  if (errors) {
    seterror(errors);
  }

  const onChange = (e) => {
    const target = {
      target: {
        name: name,
        value: e.target.value,
      },
    };
    if (type === "email") {
      if (!patern.test(e.target.value)) {
        seterror(defaultError);
      } else {
        seterror(null);
      }
    }
    if (type === "password") {
      if (e.target.value.length < 8) {
        seterror("minimum 7 character");
      } else {
        seterror(null);
      }
    }
    if (type === "number") {
      if (e.target.validity.valid) {
        props.onChange(target);
      }
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["mb-5 flex ", className].join(" ")}>
      <div className="bg-white flex-col flex">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          pattern={patern}
          value={value}
          className={[
            "bg-white focus:outline-none border w-full px-6 py-3 w-1/2  ",
            error
              ? "border-red-500 text-red-500"
              : "focus:border-teal-500 border-gray-600 text-gray-600",
          ].join(" ")}
          itemID
        />
        {error && (
          <span className="mt-1 text-red-500 font-normal text-base">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "please type here",
  defaultError: "Please input the request match",
};

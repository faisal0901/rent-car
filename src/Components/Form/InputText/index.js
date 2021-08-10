import React, { useState } from "react";

export default function InputText(props) {
  const { value, type, placeholder, name, errorResponse, className } = props;
  const [error, seterror] = useState(null);
  let patern = "";
  if (type === "email") {
    patern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }
  if (type === "number") {
    patern = "[0-9]";
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
        seterror(errorResponse);
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
          className="h-9  w-80 border border-gray-400 rounded focus:outline-none"
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
  errorResponse: "Please match the request match",
};

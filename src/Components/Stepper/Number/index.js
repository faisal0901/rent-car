import React from "react";

export default function Number({ data, style, className, current }) {
  const keyData = Object.keys(data);

  return (
    <>
      <ol
        className={[
          "stepper flex items-center justify-center m-0 p-0",
          className,
        ].join(" ")}
      >
        {keyData.map((list, index) => {
          let isActive = "active";
          if (index <= keyData.indexOf(current)) {
            isActive = "";
          }

          return (
            <li
              key={`list-${index}`}
              style={style}
              className={[
                isActive,
                " relative flex items-center text-white justify-center mt-5 text-3xl h-16 w-16 number",
              ].join(" ")}
            >
              {index + 1}
            </li>
          );
        })}
      </ol>
    </>
  );
}

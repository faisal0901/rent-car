import React from "react";

export default function title({ data, current }) {
  return (
    <>
      <div className="text-center mb-5">
        <h1 className="text-2xl font-weight-bold">
          {data[current] && data[current].title}
        </h1>
      </div>
    </>
  );
}

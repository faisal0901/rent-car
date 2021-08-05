import React, { useState } from "react";

export default function ImageProduct({ data }) {
  const [Image, setImage] = useState(0);
  return (
    <>
      <figure className="w-full border rounded-2xl h-96  border-gray-400  bg-gray-200">
        <img
          src={data[Image].imageUrl ?? "image"}
          alt="car"
          className="object-cover h-full rounded-2xl w-full  "
        />
      </figure>
      <div className="image flex justify-between mt-4 ">
        {data.map((value, index) => {
          return (
            <img
              src={value.imageUrl}
              alt={value.id}
              key={index}
              className="h-32 w-48 rounded-2xl"
              onClick={() => setImage(index)}
            />
          );
        })}
      </div>
    </>
  );
}

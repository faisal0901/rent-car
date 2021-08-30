import React, { useState } from "react";

export default function ImageProduct({ data }) {
  const [Image, setImage] = useState(0);

  return (
    <>
      <figure className="w-full border rounded-2xl h-96  border-gray-400  bg-gray-200">
        <img
          src={`${process.env.REACT_APP_API_HOST}/${
            data?.[Image]?.image ?? "ini images"
          }`}
          alt="car"
          className="object-cover h-full rounded-2xl w-full  "
        />
      </figure>
      <div className="image flex justify-between mt-4 ">
        {data?.map((value, index) => {
          return (
            <figure className="w-34 h-30 mx-2">
              <img
                src={`${process.env.REACT_APP_API_HOST}/${
                  value?.image ?? "ini images"
                }`}
                alt={"images"}
                key={index}
                className="h-full w-full object-cover rounded-2xl"
                onClick={() => setImage(index)}
              />
            </figure>
          );
        }) ?? "data not avalable"}
      </div>
    </>
  );
}

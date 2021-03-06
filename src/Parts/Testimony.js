import React from "react";

import Stars from "Components/Stars";
export default function Testimony({ data }) {
  return (
    <div className="grid grid-cols-12 gap-5 mt-3">
      {data?.map((val, index) => (
        <div
          key={`card-${index}`}
          className="col-span-12 sm:col-span-6 lg:col-span-4  card  rounded-lg border-gray-300 border"
        >
          <div className="card-header text-center flex justify-center flex-col items-center">
            <figure className="my-2">
              <img
                src={val?.User?.avatar}
                alt="asdasd"
                className="h-20 w-20 rounded-full"
              />
            </figure>
            <span>
              <h1 className="text-2xl font-medium">
                {val?.User?.name ?? "name here"}
              </h1>
              <h6 className="text-sm text-gray-600">
                {val?.User?.profession ?? "profession here"}
              </h6>
            </span>
            <div className="rate my-2 flex items-center justify-center -ml-28">
              <Stars value={val.rating} height={23} width={23} spacing={3} />
            </div>
          </div>
          <div className="card-body items-center justify-center flex h-28 bg-blue-700 text-white text-center rounded-lg">
            <p className="text-lg">{val.note}</p>
          </div>
        </div>
      )) ?? "rating not founds"}
    </div>
  );
}

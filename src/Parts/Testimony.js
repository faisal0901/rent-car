import React from "react";
import UserExample from "assets/images/userSample.jpeg";
export default function Testimony({ data }) {
  return (
    <div className="grid grid-cols-12 gap-5 mt-3">
      <div className="col-span-4 card rounded-lg border-gray-300 border">
        <div className="card-header text-center flex justify-center">
          <figure className="my-2">
            <img
              src={UserExample}
              alt="asdasd"
              className="h-20 w-20 rounded-full"
            />
          </figure>
          <span>
            <h1 className="text-xl">bayu</h1>
          </span>
        </div>
      </div>
    </div>
  );
}

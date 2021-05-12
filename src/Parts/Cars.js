import React from "react";
import car1 from "assets/images/car1.jpeg";
import Icon from "assets/images/icon.png";
export default function Cars({ data }) {
  return (
    <div className="flex justify-start mt-10 flex-wrap">
      <div className="w-1/3 px-4 mb-6 shadow-lg rounded">
        <img
          src={car1}
          alt="car"
          className="object-cover py-4 rounded w-full h-56"
        />
        <div className="justify-between flex  items-center border-b-2 border-gray-300">
          <div className="ml-2 mt-2 w-2/3">
            <h5 className="text-2xl ">Honda mazda </h5>
            <p className="text-gray-500">2017</p>
          </div>
          <div className="flex-wrap w-1/3">
            <div className="icon-1 inline-flex mt-2 mr-1 mb-2">
              <img src={Icon} alt="" />
              <span className="text-gray-500">fuel</span>
            </div>
            <div className="icon-1 inline-flex mt-2 mr-1 mb-2">
              <img src={Icon} alt="" />
              <span className="text-gray-500">fuel</span>
            </div>
            <div className="icon-1 inline-flex mt-2 mr-1 mb-2">
              <img src={Icon} alt="" />
              <span className="text-gray-500">fuel</span>
            </div>
            <div className="icon-1 inline-flex mt-2 mr-1 mb-2">
              <img src={Icon} alt="" />
              <span className="text-gray-500">fuel</span>
            </div>
          </div>
        </div>
        <div className="ml-2 mt-2 justify-between flex items-center pb-3">
          <div className="w-2/3">
            <h1 className="text-3xl font-semibold text-green-500">$200</h1>
            <span className="text-gray-500">per day</span>
          </div>
          <div className="w-1/3">
            <a
              href="/ss"
              className="bg-blue-700 px-6 py-3 text-white font-semibold rounded-lg"
            >
              select Car
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

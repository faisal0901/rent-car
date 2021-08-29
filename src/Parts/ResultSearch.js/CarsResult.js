import React from "react";
import { Link } from "react-router-dom";

export default function CarsResult({ data, duration }) {
  return (
    <>
      {data?.cars?.map((val, index) => {
        return (
          <div
            key={`resultCars-${index}`}
            className="card flex mb-10 shadow-lg rounded cursor-pointer h-52 overflow-hidden "
          >
            <figure className="image w-64  p-2 ">
              <img
                src={`${process.env.REACT_APP_API_HOST}/${
                  val?.images?.[0]?.image ?? "ini images.com"
                }`}
                alt="car"
                className="w-full object-cover h-full"
              />
            </figure>
            <div className="card-text items my-auto mx-3">
              <h5 className="text-2xl mb-2">{val?.carName ?? "car Name"} </h5>
              <h4 className="text-1xl text-gray-600 mb-2 ">
                {" "}
                {val?.address?.carCity ?? "city"},{" "}
                {val?.address?.carCountry ?? "country"}
              </h4>
              <p className="text-gray-500 mb-2">
                {val?.carRealiseDate ?? "2000"}
              </p>
              <h5 className="text-1xl mb-2">
                <span className="font-semibold text-green-500">
                  ${val.price * duration}
                </span>{" "}
                for {duration} days{" "}
              </h5>
              <Link
                className="bg-blue-700 w-3/4 h-9 py-3 px-5  text-white text-md font-semibold rounded"
                to={`detail/${val.id}`}
              >
                Select Car
              </Link>
            </div>
            <div className="card-feature flex-wrap mt-7 w-1/3  mx-auto">
              {val?.feature?.map((val2, index2) => {
                return (
                  <figure
                    className="icon inline-flex mr-2 mb-2"
                    key={`feateure-2-${index2}`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_HOST}${
                        val2?.feature_image ?? "https://images.com"
                      }`}
                      alt={val2?.feature_quantity ?? "ini alt"}
                      className="h-6 w-6"
                    />
                    <span className="text-gray-500 text-sm">
                      {val2.feature_quantity}
                    </span>
                  </figure>
                );
              }) ?? "this is feature"}
            </div>
          </div>
        );
      })}
    </>
  );
}

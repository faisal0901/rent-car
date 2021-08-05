import React from "react";
import { Link } from "react-router-dom";
export default function CarsResult({ data, duration }) {
  return (
    <>
      {data.map((val, index) => {
        return (
          <div
            key={`resultCars-${index}`}
            className="card flex mb-10 shadow-lg rounded cursor-pointer h-52 overflow-hidden "
          >
            <figure className="image w-64  p-2 ">
              <img
                src={val?.image[0].imageUrl ?? "cars"}
                alt="test"
                className="w-full object-cover h-full"
              />
            </figure>
            <div className="card-text items my-auto mx-5">
              <h5 className="text-2xl mb-2">{val.carName} </h5>
              <h4 className="text-1xl text-gray-600 mb-2 ">
                {" "}
                {val.addres.City}, {val.addres.Country}
              </h4>
              <p className="text-gray-500 mb-2">{val.carRealiseDate}</p>
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
            <div className="card-feature flex-wrap mt-7 w-1/4  mx-auto">
              {val.feature.map((val2, index2) => {
                return (
                  <figure className="icon inline-flex mr-2 mb-2">
                    <img
                      src={val2.featureImage}
                      alt="gas"
                      className="h-6 w-6"
                    />
                    <span className="text-gray-500 text-sm">
                      {val2.featureQuantity}
                    </span>
                  </figure>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

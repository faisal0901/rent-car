import React from "react";
import { Link } from "react-router-dom";
import Stars from "Components/Stars";
export default function Cars({ data }) {
  console.log(data);
  return (
    <div className="grid grid-cols-12 gap-5">
      {data.map((val, index) => {
        return (
          <div
            className="col-span-4  px-4 mb-6 shadow-lg rounded cursor-pointer relative"
            key={`car-${index}`}
          >
            <figure className="h-72">
              <img
                src={val.image[0].imageUrl ?? "car"}
                alt="car"
                className="object-cover  py-4 rounded w-full overflow-hidden"
                style={{ height: 300 }}
              />
            </figure>
            <div className="justify-between flex  items-center border-b-2 border-gray-300">
              <div className="ml-2 mt-2 w-2/3">
                <h5 className="text-2xl ">{val.carName} </h5>
                <h4 className="text-1xl text-gray-600 ">
                  {" "}
                  {val.carCity}, {val.carCountry}{" "}
                </h4>
                <p className="text-gray-500">{val.carReleaseDate}</p>
              </div>
              <div className="flex-wrap w-1/3 justify-between mt-2 ml-1">
                {val.feature.map((val2, index2) => (
                  <div
                    className="icon-1 inline-flex justify-between items-center mx-1 mb-2"
                    key={`feature-${index2}`}
                  >
                    <img
                      src={val2.featureImage}
                      alt={val2.featureQuantity}
                      className="h-6 w-6"
                    />
                    <span className="text-gray-500 text-sm">
                      {val2.featureQuantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-2 mt-2 justify-between flex items-center pb-3">
              <div className="w-2/3">
                <h1 className="text-3xl font-semibold text-green-500">
                  ${val.Price}
                </h1>
                <span className="text-gray-500">per day</span>
              </div>
              <div className="w-1/3">
                <button className="bg-blue-700 w-full h-11 text-white font-semibold rounded-lg">
                  Select Car
                </button>
              </div>
            </div>
            <div className="mb-2 ml-2">
              <Stars value={4} height={23} width={23} spacing={3} />
            </div>
            <Link
              to={`/detail/${val.id}`}
              className="link-wrapped absolute inset-0"
            ></Link>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Stars from "Components/Stars";
export default function Cars({ data }) {
  return (
    <div className="grid grid-cols-12 gap-5 justify-center">
      {data?.length > 0 ? (
        data?.map((val, index) => {
          return (
            <div
              className="col-span-11  sm:col-span-6 sm:mx-auto lg:col-span-4  px-4 mb-6 shadow-lg rounded cursor-pointer relative"
              key={`car-${index}`}
            >
              <figure className="h-70">
                <img
                  src={`${process.env.REACT_APP_API_HOST}/${
                    val?.images?.[0]?.image ?? "ini images"
                  }`}
                  alt="car"
                  className="object-cover  py-4 rounded w-full overflow-hidden"
                  style={{ height: 285 }}
                />
              </figure>
              <div className="justify-between flex  items-center border-b-2 border-gray-300">
                <div className="ml-2 mt-2 w-1/2">
                  <h5 className="text-2xl ">{val.carName} </h5>
                  <h4 className="text-1xl text-gray-600 ">
                    {" "}
                    {val?.carCity ?? "country"}, {val?.carCountry ?? "country"}{" "}
                  </h4>
                  <p className="text-gray-500">
                    {val?.carRealiseDate ?? "date"}
                  </p>
                </div>
                <div className="flex-wrap w-1/2 justify-between mt-2 ">
                  {val?.feature?.map((val2, index2) => (
                    <div
                      className="icon-1   inline-flex                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        items-center mx-2 mb-2"
                      key={`feature-${index2}`}
                      style={{ width: 70 }}
                    >
                      <img
                        src={`${process.env.REACT_APP_API_HOST}${
                          val2?.feature_image ?? "https://images.com"
                        }`}
                        alt={val2?.feature_quantity ?? "ini alt"}
                        className="h-6 w-6"
                      />
                      <span className="text-gray-500  text-sm">
                        {val2?.feature_quantity ?? "quantiy"}
                      </span>
                    </div>
                  )) ?? "not found "}
                </div>
              </div>
              <div className="ml-2 mt-2 justify-between flex items-center pb-3">
                <div className="w-2/3">
                  <h1 className="text-3xl font-semibold text-green-500">
                    ${val?.price ?? "price"}
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
                {val?.rating ? (
                  <Stars
                    value={val.rating}
                    height={23}
                    width={23}
                    spacing={3}
                  />
                ) : (
                  <p className="text-gray-500">rating not avaliable</p> ??
                  "rating"
                )}
              </div>
              <Link
                to={`/detail/${val.id}`}
                className="link-wrapped absolute inset-0"
              ></Link>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500">not found</p>
      )}
    </div>
  );
}

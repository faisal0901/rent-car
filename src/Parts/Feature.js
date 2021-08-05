import React from "react";

export default function Feature({ data }) {
  return (
    <div className="w-1/2 flex justify-between">
      <div className="w-5/12 mr-2">
        <div className="flex justify-between mt-2">
          <span className="text-xl font-light">engine </span>
          <span className="text-xl font-medium">
            {data?.carEngine ?? "car engine"}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xl font-light">Realise</span>
          <span className="text-xl font-medium">
            {data?.carRealiseDate ?? "Realise Date"}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xl font-light">Gas</span>
          <span className="text-xl font-medium">
            {data?.carGas ?? "Realise Date"}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xl font-light">Power</span>
          <span className="text-xl font-medium">
            {data?.carHorsePower ?? "Realise Date"}
          </span>
        </div>
      </div>
      <div className="ml-8 ">
        {data?.feature?.map((val2, index2) => {
          return (
            <div
              className="icon-1 w-16   inline-flex items-center mx-3 mb-7"
              key={`feature-${index2}`}
            >
              <img
                src={val2.featureImage}
                alt={val2.featureQuantity}
                className="h-8 w-8"
              />
              <span className="text-gray-500  text-base">
                {val2.featureQuantity}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

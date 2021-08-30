import React from "react";

export default function Address({ data }) {
  return (
    <div className="flex">
      <div className="street mt-5">
        <p className="mb-2 text-left text-xl font-medium">
          {data?.street_name ?? "street name"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.carCity ?? "city name"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.carCountry ?? "Country name"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.zipcode ?? "Zip Code"}
        </p>
      </div>
      <div className="mt-5 ml-16">
        <p className="mb-2 text-left text-xl font-medium">
          {data?.phone_number ?? "Zip Code"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.mobile_number ?? ""}
        </p>
      </div>
    </div>
  );
}

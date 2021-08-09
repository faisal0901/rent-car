import React from "react";

export default function Address({ data }) {
  return (
    <div className="flex">
      <div className="street mt-5">
        <p className="mb-2 text-left text-xl font-medium">
          {data?.streetName ?? "street name"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.City ?? "city name"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.Country ?? "Country name"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.zipCode ?? "Zip Code"}
        </p>
      </div>
      <div className="mt-5 ml-16">
        <p className="mb-2 text-left text-xl font-medium">
          {data?.phone[0]?.phoneNumber ?? "Zip Code"}
        </p>
        <p className="mb-2 text-left text-xl font-medium">
          {data?.phone[0]?.mobileNumber ?? "Zip Code"}
        </p>
      </div>
    </div>
  );
}

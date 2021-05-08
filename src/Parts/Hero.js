import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";

export default function Hero({ data }) {
  const initState = {
    country: "",
    city: "",
    days: 0,
  };
  const [state, setState] = useState(initState);
  return (
    <div className="flex justify-between items-center ">
      <div className="w-1/2">
        <h1 className="text-5xl text-white mt-20  font-semibold ">
          <div className="mb-3"> Find You Dream</div>
          <div>Car For Vacation</div>
        </h1>
        <h6 className="text-base mt-5 text-white">
          we present the best experience for driving
          <br />
          Lorem, ipsum dolor.
        </h6>
      </div>
      <div className="w-1/2 relative">
        <CheckoutForm data={data} />
      </div>
    </div>
  );
}
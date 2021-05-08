import React from "react";

export default function CheckoutForm({ data }) {
  return (
    <div className="right-0 -top-16 -bottom-4  absolute   w-3/4  z-10 ">
      <div className="card-date bg-white shadow-2xl" style={{ height: 476 }}>
        <div className="flex justify-center">
          <div className="w-11/12 mt-7 ">
            <label for="country" className="text-gray-400 text-sm">
              Country
            </label>
            <select
              name="country"
              className="bg-gray-100  w-full rounded h-10 focus:outline-none"
              id="country"
            >
              <option value="-" disabled>
                silakan pilih
              </option>
              {data.map((value, index) => {
                return (
                  <option value={value.name} key={`country-${index}`}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 mt-7 ">
            <label for="City" className="text-gray-400 text-sm">
              City
            </label>
            <select
              name="country"
              className="bg-gray-100  w-full rounded h-10 focus:outline-none"
              id="country"
            >
              <option value="volvo">silakan pilih</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
}

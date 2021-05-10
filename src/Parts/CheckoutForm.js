import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import iconCelendar from "assets/images/celendar-removebg-preview.png";
export default function CheckoutForm({ data }) {
  const initState = {
    startDate: new Date(),
    endDate: new Date(),
    country: "",
    city: "",
  };
  const [state, setState] = useState(initState);
  const duration = Math.abs(state.endDate - state.startDate);
  const diffDays = Math.ceil(duration / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  const HandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="right-0 -top-16 -bottom-4  absolute   w-3/4  z-10 ">
      <div className="card-date bg-white shadow-2xl" style={{ height: 476 }}>
        <div className="flex justify-center">
          <div className="w-11/12 mt-7">
            <p className="text-gray-400 text-sm">Country</p>
            <select
              name="country"
              className="bg-gray-100  w-full rounded h-10 focus:outline-none"
              id="country"
              onChange={HandleChange}
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
            <p className="text-gray-400 text-sm">City</p>
            <select
              onChange={HandleChange}
              name="city"
              className="bg-gray-100  w-full rounded h-10 focus:outline-none"
              id="country"
            >
              <option value="" disabled>
                silakan pilih
              </option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 mt-7 flex-col ">
            <p className="text-gray-400 text-sm">Pick up Date</p>
            <span className="inline-flex">
              <img
                src={iconCelendar}
                alt="icon"
                className="h-10 w-12 bg-gray-100"
              />
              <DatePicker
                selected={state.startDate}
                showTimeSelect
                minDate={new Date()}
                name="startDate"
                selectsStart
                startDate={state.startDate}
                endDate={state.endDate}
                className="bg-gray-100  w-96 rounded h-10 focus:outline-none"
                onChange={(e) => setState({ ...state, startDate: e })}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 mt-7 flex-col ">
            <p className="text-gray-400 text-sm">Drop-off Date</p>
            <span className="inline-flex">
              <img
                src={iconCelendar}
                alt="icon"
                className="h-10 w-12 bg-gray-100"
              />
              <DatePicker
                selected={state.endDate}
                showTimeSelect
                name="endDate"
                startDate={state.startDate}
                endDate={state.endDate}
                minDate={state.startDate}
                className="bg-gray-100  w-96 rounded h-10 focus:outline-none"
                onChange={(e) => setState({ ...state, endDate: e })}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 mt-9 ">
            <button className="w-full bg-blue-600 rounded focus:outline-none text-white text-xl rounded-sm h-10">
              Find Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
// import iconCelendar from "assets/images/celendar-removebg-preview.png";
import InputDate from "Components/Form/InputDate";
export default function CheckoutForm({ data, submitCheckout }) {
  const initState = {
    country: null,
    city: null,
  };
  const history = useHistory();
  const [state, setState] = useState(initState);
  const [disabled, setDisabled] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [child, setchild] = useState("");

  const HandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setDisabled(true);
  };

  useEffect(() => {
    submitCheckout({
      startDate: new Date(),
      endDate: new Date(),
      totalDays: 1,
      country: "",
      city: "",
    });
  }, [submitCheckout]);

  const submitData = () => {
    submitCheckout({ ...state, ...child });
    history.push(`search?country=${state.country}&city=${state.city}`);
  };
  function check() {
    if (
      buttonDisable === true &&
      state.country !== null &&
      state.city !== null
    ) {
      return true;
    }
    return false;
  }

  return (
    <div className="md:right-0 md:-top-16 rounded-md md:-bottom-4 top-10 left-16 md:left-24 absolute   w-3/4  z-10 ">
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
              <option value="-" disabled={disabled}>
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
              <option value="">silakan pilih</option>
              <option value="depok">depok</option>
              <option value="jakarta">jakarta</option>
              <option value="bogor">bogor</option>
            </select>
          </div>
        </div>

        <InputDate
          showButton
          setchild={setchild}
          className="w-11/12"
          isSelected={(selected) => {
            setButtonDisable(selected());
          }}
        ></InputDate>

        <div className="flex justify-center mt-4">
          <div className="w-11/12">
            <button
              onClick={() => submitData()}
              disabled={!check()}
              className="w-full bg-blue-600 hover:bg-blue-700  focus:outline-none text-white text-xl rounded-sm h-10"
            >
              Find Now
            </button>
            {check() === false ? (
              <p className="text-sm text-red-500">please Completed</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

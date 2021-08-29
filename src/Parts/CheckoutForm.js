import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
// import iconCelendar from "assets/images/celendar-removebg-preview.png";
import InputDate from "Components/Form/InputDate";
import apiCountry from "Constant/api/apiCountry";
import apiCity from "Constant/api/apiCity";
export default function CheckoutForm({ submitCheckout }) {
  const [country, setcountry] = useState([""]);
  const [city, setcity] = useState([""]);
  const initState = {
    country: null,
    city: null,
  };
  useEffect(() => {
    apiCountry.getAll().then((res) => {
      setcountry(res.data);
    });
  }, []);

  const history = useHistory();
  const [state, setState] = useState(initState);
  const [disabled, setDisabled] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [child, setchild] = useState("");

  const HandleChange = (e) => {
    const id = e.target.name === "country" ? e.target.value : "";

    setState({ ...state, [e.target.name]: e.target.value });
    setDisabled(true);
    if (e.target.name === "country") {
      apiCity.getCityByid(id).then((res) => {
        setcity(res.data);
      });
    }
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
    history.push(`search?&city=${state.city}`);
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
              {country.map((value, index) => {
                return (
                  <option value={value.id} key={`country-${index}`}>
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
              id="city"
            >
              <option value="">silakan pilih</option>
              {city.map((value, index) => {
                return (
                  <option value={value.id} key={`city-${index}`}>
                    {value.name}
                  </option>
                );
              })}
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

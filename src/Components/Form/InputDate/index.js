import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import iconCelendar from "assets/images/celendar-removebg-preview.png";
import propTypes from "prop-types";

export default function InputDate(props) {
  const initState = {
    startDate: new Date(),
    endDate: new Date(),
  };

  const [state, setState] = useState(initState);
  const setchild = props.setchild ? props.setchild : undefined;
  const { globalState, setCheckoutBooking } = props;
  const [totalDays, setTotalDays] = useState(1);
  useEffect(() => {
    const calculateDays = () => {
      const duration = Math.abs(
        globalState
          ? globalState.endDate - globalState.startDate
          : state.endDate - state.startDate
      );
      const diffDays = Math.ceil(duration / (1000 * 60 * 60 * 24));
      if (globalState) {
        if (globalState.endDate.getHours() > globalState.startDate.getHours()) {
          return diffDays - 1;
        } else {
          return diffDays;
        }
      } else {
        if (state.endDate.getHours() > state.startDate.getHours()) {
          return diffDays - 1;
        } else {
          return diffDays;
        }
      }
    };
    setTotalDays(calculateDays());
    if (setchild) {
      setchild({
        ...state,
        totalDays: totalDays,
      });
    }
  }, [state, setchild, totalDays, setTotalDays, globalState]);
  function Selected() {
    const start = globalState ? globalState.startDate : state.startDate;
    const end = globalState ? globalState.endDate : state.endDate;
    let boolean;

    if (
      start.getDate() === end.getDate() &&
      start.getMonth() === end.getMonth()
    ) {
      boolean = false;
    } else {
      boolean = true;
    }
    if (
      start.getDate() >= end.getDate() &&
      start.getMonth() >= end.getMonth()
    ) {
      boolean = false;
    } else {
      boolean = true;
    }

    return boolean;
  }

  return (
    <>
      {props.isSelected ? props.isSelected(Selected) : ""}

      <div className="flex justify-center">
        <div className={[" mt-7 flex-col", props.className].join(" ")}>
          <p className="text-gray-400 text-sm">Pick up Date</p>
          <span className="inline-flex w-full">
            <img
              src={iconCelendar}
              alt="icon"
              className="h-10 w-12 bg-gray-100"
            />
            <DatePicker
              selected={globalState ? globalState.startDate : state.startDate}
              minDate={new Date()}
              name="startDate"
              showTimeSelect
              selectsStart
              startDate={globalState ? globalState.startDate : state.startDate}
              endDate={globalState ? globalState.endDate : state.endDate}
              className="bg-gray-100  w-full rounded h-10 focus:outline-none"
              onChange={(start) => {
                setCheckoutBooking
                  ? setCheckoutBooking({
                      ...globalState,
                      startDate: start,
                      totalDays: totalDays,
                    })
                  : setState({ ...state, startDate: start });
              }}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className={[" mt-7 flex-col", props.className].join(" ")}>
          <p className="text-gray-400 text-sm">Drop-off Date</p>
          <span className="inline-flex w-full">
            <img
              src={iconCelendar}
              alt="icon"
              className="h-10 w-12 bg-gray-100"
            />
            <DatePicker
              selected={globalState ? globalState.endDate : state.endDate}
              name="endDate"
              showTimeSelect
              startDate={globalState ? globalState.startDate : state.startDate}
              endDate={globalState ? globalState.endDate : state.endDate}
              minDate={globalState ? globalState.startDate : state.startDate}
              className="bg-gray-100  w-full rounded h-10 focus:outline-none"
              onChange={(end) => {
                setCheckoutBooking
                  ? setCheckoutBooking({
                      ...globalState,
                      endDate: end,
                      totalDays: totalDays,
                    })
                  : setState({ ...state, endDate: end });
              }}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </span>
        </div>
      </div>
    </>
  );
}
InputDate.propTypes = {
  className: propTypes.string,
  isSelected: propTypes.func,
  setChild: propTypes.func,
  globalState: propTypes.object,
  setCheckoutBooking: propTypes.func,
};

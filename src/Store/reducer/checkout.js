import { SUBMIT_CHECKOUT, SET_CHECKOUT } from "../types";
const initState = {
  startDate: new Date(),
  endDate: new Date(),
  totalDays: 1,
  country: "",
  city: "",
};
const checkout = function (state = initState, action) {
  switch (action.type) {
    case SUBMIT_CHECKOUT:
      return action.payload;
    case SET_CHECKOUT:
      return action.payload;
    default:
      return state;
  }
};
export default checkout;

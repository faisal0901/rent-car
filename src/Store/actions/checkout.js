import { SUBMIT_CHECKOUT, SET_CHECKOUT } from "../types";
export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: SUBMIT_CHECKOUT,
    payload: payload,
  });
};
export const setCheckoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: SET_CHECKOUT,
    payload: payload,
  });
};

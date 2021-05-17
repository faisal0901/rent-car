import { SUBMIT_CHECKOUT } from "../types";
export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: SUBMIT_CHECKOUT,
    payload: payload,
  });
};

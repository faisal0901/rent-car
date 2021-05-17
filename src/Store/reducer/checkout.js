import { SUBMIT_CHECKOUT } from "../types";
const initState = null;
export default function (state = initState, action) {
  switch (action.type) {
    case SUBMIT_CHECKOUT:
      return action.payload;
    default:
      return state;
  }
}

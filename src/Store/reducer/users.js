import { POPULATE_PROFILE } from "../types";
const initState = {};
const users = function (state = initState, action) {
  switch (action.type) {
    case POPULATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
export default users;

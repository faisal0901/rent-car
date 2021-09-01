import { combineReducers } from "redux";
import checkout from "./checkout";
import users from "./users";
export default combineReducers({
  checkout,
  users,
});

import { combineReducers } from "redux";
import checkout from "./checkout";
import populate from "./users";
export default combineReducers({
  checkout,
  populate,
});

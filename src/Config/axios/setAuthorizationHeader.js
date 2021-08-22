import axios from "./index";

const setAuthorizationHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = token;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
export default setAuthorizationHeader;

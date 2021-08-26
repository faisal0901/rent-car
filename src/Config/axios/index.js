import axios from "axios";
import errorHanddler from "./errorHandler";
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}`,
});
instance.interceptors.response.use((response) => response.data, errorHanddler);
export default instance;
export { default as setAuthorizationHeader } from "./setAuthorizationHeader";

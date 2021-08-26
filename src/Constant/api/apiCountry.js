import axios from "Config/axios";
const apiCountry = {
  getAll: () => axios.get("/country"),
};
export default apiCountry;

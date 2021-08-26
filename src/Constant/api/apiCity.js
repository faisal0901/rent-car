import axios from "Config/axios";
const apiCity = {
  getCityByid: (id) => axios.get(`/city/${id}`),
};
export default apiCity;

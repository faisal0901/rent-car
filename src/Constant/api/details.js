import axios from "Config/axios";
const details = {
  get: (id) => axios.get(`/detail/${id}`),
};
export default details;

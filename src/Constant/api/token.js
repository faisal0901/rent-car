import axios from "Config/axios";
const token = {
  get: (id) => axios.get(`/token/${id}`),
};
export default token;

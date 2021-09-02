import axios from "Config/axios";
const booking = {
  post: (payload) => axios.post(`/booking`, payload),
  get: (id) => axios.get(`/booking/${id}`),
};
export default booking;

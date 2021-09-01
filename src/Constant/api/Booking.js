import axios from "Config/axios";
const booking = {
  post: (payload) => axios.post(`/booking`, payload),
};
export default booking;

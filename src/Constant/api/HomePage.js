import axios from "Config/axios";
const homePage = {
  cars: () => axios.get(`/homepage`),
};
export default homePage;

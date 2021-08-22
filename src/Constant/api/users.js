import axios from "Config/axios";
const users = {
  register: (payload) => axios.post("/users/register", payload),
  login: (credential) => axios.post("/users/login", credential),
};
export default users;

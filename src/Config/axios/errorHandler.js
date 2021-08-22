import { toast } from "react-toastify";

export default function errorHandler(error) {
  if (error) {
    let massage;
    if (error.response) {
      if (error.response.status === 500) {
        massage = "something went wrong";
      } else {
        massage = error.response.data.massage;
      }
      if (typeof massage === "string") toast.error(massage);
      return Promise.reject(error);
    }
  }
}

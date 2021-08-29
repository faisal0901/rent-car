import axios from "Config/axios";
const Search = {
  getSarch: (id, page) =>
    axios.get(`/search/${id}`, {
      params: {
        page: page,
      },
    }),
};
export default Search;

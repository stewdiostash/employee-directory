import axios from "axios";

const URL = "https://randomuser.me/api/?nat=US&results=500";

export default {
  search: function () {
    return axios.get(URL);
  },
};

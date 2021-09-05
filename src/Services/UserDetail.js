import axios from "axios";

const baseURL = "https://api.github.com";
const UserDetailAPI = {
  detailUser: (id) => {
    return axios.get(`${baseURL}/users/${id}`);
  },
  reposUser: (id) => {
    return axios.get(`${baseURL}/users/${id}/repos`);
  },
};

export default UserDetailAPI;
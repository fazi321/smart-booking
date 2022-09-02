import axios from "axios";
// import authHeader from "./authHeaders";

export default () =>
  axios.create({
    baseURL: "https://13.229.167.135:4000/api/v1/",
    withCredentials: false,
    // headers: authHeader(),
  });

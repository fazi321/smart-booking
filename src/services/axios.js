import axios from "axios";
// import authHeader from "./authHeaders";

export default () =>
  axios.create({
    baseURL: "http://13.229.167.135:5000/",
    withCredentials: false,
    // headers: authHeader(),
  });

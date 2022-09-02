import axios from "axios";
// import authHeader from "./authHeaders";

export default () =>
  axios.create({
    baseURL: "http://testingserver.tech:5000/api/v1/",
    withCredentials: false,
    // headers: authHeader(),
  });

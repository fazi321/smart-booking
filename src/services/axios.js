import axios from "axios";
// import https from 'https-browserify';
// import authHeader from "./authHeaders";
/* eslint-disable */
export default () =>
  axios.create({
    baseURL: "http://testingserver.tech:5000/api/v1/",
    withCredentials: false,
    // httpsAgent: new https.Agent({ rejectUnauthorized: false })
    // headers: authHeader(),
  });


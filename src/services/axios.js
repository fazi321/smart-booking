import axios from "axios";
// import https from 'https-browserify';
// import authHeader from "./authHeaders";
/* eslint-disable */
export default () =>
  axios.create({
    baseURL: "https://www.testingserver.tech/api/v1/",
    withCredentials: false,
    // httpsAgent: new https.Agent({ rejectUnauthorized: false })
    // headers: authHeader(),
  });


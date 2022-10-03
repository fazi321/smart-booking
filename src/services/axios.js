import axios from "axios";
// import https from 'https-browserify';
// import authHeader from "./authHeaders";
// https://www.testingserver.tech/api/v1/"
// http://13.229.167.135:5000/api/v1/
/* eslint-disable */
export default () =>
  axios.create({
    baseURL: "https://www.testingserver.tech/api/v1/",
    withCredentials: false,
    // httpsAgent: new https.Agent({ rejectUnauthorized: false })
    // headers: authHeader(),
     // https://www.testingserver.tech/api/v1/
  });


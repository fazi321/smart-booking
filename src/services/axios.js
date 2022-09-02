import axios from "axios";
import https from 'https-browserify';
// import authHeader from "./authHeaders";
/* eslint-disable */
export default () =>
  axios.create({
    baseURL: "https://13.229.167.135:4000/api/v1/",
    withCredentials: false,
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
    // headers: authHeader(),
  });


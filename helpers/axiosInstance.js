import { getToken, removeToken } from "../helpers/AuthToken";
import axios from "axios";

const baseURL = "https://nikgallery.com/api/";
let headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
  timeout: 20000,
  paramsSerializer(params) {
    console.log(`Request   params`, params);
    return JSON.stringify(params, { indices: false });
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let token = "";
    await getToken().then((auth) => {
      // console.log(` axios auth   token ${auth}`);
      token = auth;
    });
    // console.log(`axios header token ${token}`);
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // if (process.env.NODE_ENV === "development") {
    // console.log(`Request sent to ${config.url}`, config.params);
    //todo   console.log(`Request sent to ${config.url}`, config);
    //console.log("header : ", headers);
    // console.log("userToken header", config.headers);
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    console.log(`error  ${error.response.status}`);
    if (error.response.status === 403 || error.response.status === 401) {
      // if (navigation) {
      //     navigation.push("/auth/login");
      // }
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;

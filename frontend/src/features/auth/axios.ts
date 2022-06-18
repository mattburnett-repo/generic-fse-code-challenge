
import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_AUTH_SERVER,
  headers: { 
    "Content-Type": "application/json" 
  },
});

axios.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;

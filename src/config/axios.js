import axios from "axios";
import { getAccessToken } from "../services/localStorage";
import { ENDPOINT_URL } from "./env";

axios.defaults.baseURL = ENDPOINT_URL;
axios.interceptors.request.use((config) => {
  config.headers.authorization = "Bearer " + getAccessToken();
  return config;
});

export default axios;

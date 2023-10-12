import axios from "axios";
import UNIVERSAL from "config";
import { CREDENTIALS } from "utils/dataKeys";
import { loadFromLocalStorage } from "utils/manageLocalStorage";

const Axios = axios.create({
  baseURL: UNIVERSAL.BASEURL,
});

Axios.interceptors.request.use((config) => {
  config = {
    ...config,
    headers: {
      Authorization: `Bearer ${loadFromLocalStorage(CREDENTIALS)?.token}`,
    },
    metadata: { startTime: new Date() },
  };

  return config;
});

Axios.interceptors.response.use(
  (response) => {
    response.config.metadata.endTime = new Date();
    response.duration =
      response.config.metadata.endTime - response.config.metadata.startTime;
    return response;
  },
  (error) => {
    error.config.metadata.endTime = new Date();
    error.duration =
      error.config.metadata.endTime - error.config.metadata.startTime;
    return Promise.reject(error);
  }
);

export default Axios;

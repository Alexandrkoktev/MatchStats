import axios from "axios";

export const StatsClient = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  validateStatus: (status) => {
    return status < 400;
  },
});

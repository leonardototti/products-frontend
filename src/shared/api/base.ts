import axios from "axios";
import { URL_API } from "@/shared/constants/apiUrls";

const api = () => {
  const instance = axios.create({
    baseURL: URL_API,
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default api();

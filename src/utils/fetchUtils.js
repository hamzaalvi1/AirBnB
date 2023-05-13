import axios from "axios";
import { BaseURL } from "@/config/api-routes";

const fetchAPI = (fetchParams) => {
  const { method, url, queryParams, headers } = fetchParams;
  return axios({
    headers: headers,
    method: method,
    url: `${BaseURL}${url}`,
    ...(data && data),
    ...(queryParams && { params: queryParams }),
  });
};

export default fetchAPI;

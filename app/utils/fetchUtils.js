import axios from "axios";
import { BaseURL } from "@/app/config/api-routes";

const fetchAPI = (fetchParams) => {
  const { method, url, queryParams, headers, data } = fetchParams;
  return axios({
    method: method,
    url: `${BaseURL}${url}`,
    ...(data && { data: data }),
    ...(headers && headers),
    ...(queryParams && { params: queryParams }),
  });
};

export default fetchAPI;

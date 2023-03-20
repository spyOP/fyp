import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "v1/login";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}

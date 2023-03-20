import http from "./httpService";
import config from "../config.json";
const apiUrl = config.apiUrl;
const apiEndpoint = apiUrl + "/v1/login";

export function login(username, password, team_password) {
  return http.post(apiEndpoint, { username, password, team_password });
}

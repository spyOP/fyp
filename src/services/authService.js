import http from "./httpService";
import config from "../config.json";
const apiUrl = config.apiUrl;
const apiEndpoint = apiUrl + "/v1/login";

export function login(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
    team_password: user.team_password,
  });
}

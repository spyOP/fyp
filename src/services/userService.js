import http from "./httpService";
import config from "../config.json";
const apiUrl = config.apiUrl;
const apiEndpoint = apiUrl + "/v1/register";

export function register(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
    confirm_password: user.confirm_password,
    team_password: user.team_password,
  });
}

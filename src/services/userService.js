import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl + "v1/register";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    confirm_password: user.confirm_password,
    name: user.name,
  });
}

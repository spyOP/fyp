import http from "./httpService";
import jwtDecode from "jwt-decode";
import config from "../config.json";

const apiUrl = config.apiUrl;
const apiEndpoint = apiUrl + "/v1/login";

export async function login(user) {
  const { data: jwt } = await http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
    team_password: user.team_password,
  });
  localStorage.setItem("access_token", jwt.access_token);
  localStorage.setItem("refresh_token", jwt.access_token);
}

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("access_token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};

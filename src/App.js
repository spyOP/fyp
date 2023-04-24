import React, { Component } from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import http from "./services/httpService";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Payloads from "./pages/Payloads";
import Graphs from "./pages/Graphs";
import Tasks from "./pages/Tasks";
import Guide from "./pages/Guide";
import config from "./config.json";
import RegisterForm from "./components/registerForm";
import auth from "./services/authService";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import LandingPage from "./pages/landing_page";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <BrowserRouter>
        <ToastContainer />
        {/* <NavBar user={this.state.user} /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

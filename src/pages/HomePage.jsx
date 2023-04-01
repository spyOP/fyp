import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginForm from "../components/loginForm";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavLink to="login">Login</NavLink>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default HomePage;

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <nav className="nav">
      <a className="navbar-brand">
        <div className="logo-image">
          <img src="logo.png" />
        </div>
      </a>
      <ul>
        <li>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink to="/dashboard">{user.sub}</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </React.Fragment>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

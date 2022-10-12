import React, { Component } from "react";
const NavBar = () => {
  return (
    <nav className="nav">
      <a className="navbar-brand">
        <div className="logo-image">
          <img src="logo.png" />
        </div>
      </a>
      <ul>
        <li>
          <a href="#">Welcome User_1</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as authService from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "", team_password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(3).label("Password"),
    team_password: Joi.string().required().min(8).label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await authService.login(data);
      localStorage.setItem("token", jwt.access_token);
    } catch (ex) {
      alert(ex.response.data.msg);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div class="login-page">
          <div class="form">
            <div class="login">
              <div class="login-header">
                <div class="circle"></div>
                <img src="logo.png" />
                <p id="first">Please enter your credentials</p>
              </div>
            </div>
            <form className="login-form" onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("team_password", "Team Password", "password")}
              {this.renderButton("Login")}
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;

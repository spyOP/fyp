import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      email: "",
      confirm_password: "",
      team_password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    email: Joi.string().required().min(5).label("Password"),
    confirm_password: Joi.string().required().min(5).label("Confirm Password"),
    team_password: Joi.string().required().label("Team Password"),
  };

  doSubmit = async () => {
    try {
      const { data: res } = await userService.register(this.state.data);
      alert(res.msg);
    } catch (ex) {
      alert(ex.response.data.msg);
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("confirm_password", "Confirm password", "password")}
          {this.renderInput("team_password", "Team Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

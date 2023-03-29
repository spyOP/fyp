import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      confirm_password: "",
      team_password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    confirm_password: Joi.string().required().min(5).label("Confirm Password"),
    team_password: Joi.string().required().label("Team Password"),
  };

  doSubmit = async () => {
    console.log("submitted");
    try {
      const { data: res } = await userService.register(this.state.data);
      alert(res.msg);
    } catch (ex) {
      if (ex.response && ex.response.status !== 200) {
        console.log("not submitted");
        const errors = { ...this.state.errors };
        errors.username = ex.response;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("confirm_password", "Confirm password", "password")}
          {this.renderInput("team_password", "Team Password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

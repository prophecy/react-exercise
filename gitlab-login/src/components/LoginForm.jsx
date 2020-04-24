import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    isShowForgotPassword: false,
    usernameInputLabel: "",
    passwordInputLabel: "",
  };

  render() {
    let forgetPasswordLink;

    if (this.state.isShowForgotPassword)
      forgetPasswordLink = (
        <div>
          <a href="http://google.com">Forgot your password?</a>
          <br />
        </div>
      );

    return (
      <div className="login-form">
        <input id="username-input" type="text" name="name" />
        <label htmlFor="username-input">{this.state.usernameInputLabel}</label>
        <br />
        <input id="password-input" type="password" name="password" />
        <label htmlFor="password-input">{this.state.passwordInputLabel}</label>
        <br />
        <input type="checkbox" id="remember-me" />
        <label htmlFor="checkbox">Remember me</label>
        {forgetPasswordLink}
        <button id="sign-in-button">Sign in</button>
      </div>
    );
  }
}

export default LoginForm;

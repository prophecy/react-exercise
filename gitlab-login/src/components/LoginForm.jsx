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
        <React.Fragment>
          <a href="http://google.com">Forgot your password?</a>
          <br />
        </React.Fragment>
      );

    return (
      <div className="login-form">
        <label htmlFor="username-input" className="login-element">
          {this.state.usernameInputLabel}
        </label>
        <input
          id="username-input"
          className="input-text login-element"
          type="text"
          name="name"
        />
        <label htmlFor="password-input" className="login-element">
          {this.state.passwordInputLabel}
        </label>
        <input
          id="password-input"
          className="input-text login-element"
          type="password"
          name="password"
        />
        <input type="checkbox" id="remember-me" />
        <label htmlFor="checkbox">Remember me</label>
        {forgetPasswordLink}
        <input
          type="submit"
          value="Sign in"
          id="sign-in-submit"
          className="input input-submit login-element"
        />
      </div>
    );
  }
}

export default LoginForm;

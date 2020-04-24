import LoginForm from "./LoginForm";

class LoginFormStandard extends LoginForm {
  constructor(props) {
    super(props);

    this.state.isShowForgotPassword = true;
    this.state.usernameInputLabel = "Username or email";
    this.state.passwordInputLabel = "Password";
  }
}

export default LoginFormStandard;

import LoginForm from "./LoginForm";

class LoginFormLDAP extends LoginForm {
  constructor(props) {
    super(props);

    this.state.isShowForgotPassword = false;
    this.state.usernameInputLabel = "LDAP Username";
    this.state.passwordInputLabel = "Password";
  }
}

export default LoginFormLDAP;

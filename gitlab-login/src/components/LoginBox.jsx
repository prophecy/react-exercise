import React, { Component } from "react";

import Tabs from "./Tabs";
import LoginFormLDAP from "./LoginFormLDAP";
import LoginFormStandard from "./LoginFormStandard";

class LoginBox extends Component {
  state = {};
  render() {
    return (
      <div className="login-box">
        <div>
          <Tabs>
            <div label="LDAP">
              <LoginFormLDAP />
            </div>
            <div label="Standard">
              <LoginFormStandard />
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default LoginBox;

import React, { Component } from "react";

import Tabs from "./Tabs";

class LoginBox extends Component {
  state = {};
  render() {
    return (
      <div className="login-box col-4">
        <div>
          <Tabs>
            <div label="LDAP">
              See ya later, <em>Alligator</em>!
            </div>
            <div label="Standard">
              After &apos;while, <em>Crocodile</em>!
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default LoginBox;

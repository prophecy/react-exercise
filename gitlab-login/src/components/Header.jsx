import React, { Component } from "react";
import logo from "../resources/the_witcher_logo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";

import Description from "./Description";
import LoginBox from "./LoginBox";

class Container extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>GitLab Community Edition</h1>
        </div>
        <div className="inner-content">
          <Description />
          <LoginBox />
        </div>
      </div>
    );
  }
}

export default Container;

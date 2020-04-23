import React, { Component } from "react";

import Title from "./Title";
import Description from "./Description";
import LoginBox from "./LoginBox";

class Container extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Title />
        <Description />
        <LoginBox />
      </div>
    );
  }
}

export default Container;

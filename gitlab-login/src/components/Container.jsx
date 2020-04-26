import React, { Component } from "react";

import Description from "./Description";
import LoginBox from "./LoginBox";
import Footer from "./Footer";

class Container extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>GitLab Community Edition</h1>
          </div>
          <div className="inner-content">
            <Description />
            <LoginBox />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Container;

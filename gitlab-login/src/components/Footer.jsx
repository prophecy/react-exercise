import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <a href="/explore">Explore</a>
        <a href="/help">Help</a>
        <a href="https://about.gitlab.com/">About GitLab</a>
      </div>
    );
  }
}

export default Footer;

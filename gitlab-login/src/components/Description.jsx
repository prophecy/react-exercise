import React, { Component } from "react";

class Description extends Component {
  state = {};
  render() {
    return (
      <div className="description col-7">
        <h1>Open source software to collaborate on code</h1>
        <p>
          Manage Git repositories with fine-grained access controls that keep
          your code secure. Perform code reviews and enhance collaboration with
          merge requests. Each project can also have an issue tracker and a
          wiki.
        </p>
      </div>
    );
  }
}

export default Description;

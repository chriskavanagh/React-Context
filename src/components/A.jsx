import React, { Component } from "react";
import { UserContext } from "./userContext";

class A extends Component {
  // creates context, is available in this.context
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h1>I am component A</h1>
        <h2>My Name Is {this.context}</h2>
      </div>
    );
  }
}

export default A;

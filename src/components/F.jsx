import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class F extends Component {
  render() {
    return (
      <UserConsumer>
        {user => {
          return <div>Hello {user}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default F;

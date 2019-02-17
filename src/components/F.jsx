import React, { Component } from "react";
import B from "./B";
import { UserConsumer } from "./userContext";

class F extends Component {
  render() {
    return (
      <UserConsumer>
        {user => {
          return <B name={user} />;
        }}
      </UserConsumer>
    );
  }
}

export default F;

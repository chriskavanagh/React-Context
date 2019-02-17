import React, { Component } from "react";

class B extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1 style={{ color: "tomato" }}>I am component B, My name is {name}</h1>
      </div>
    );
  }
}

export default B;

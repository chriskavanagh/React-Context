import React, { Component } from "react";
import { Consumer } from "./buttonContext";

class Button extends Component {
  render() {
    return (
      <Consumer>
        {context => <button>{context.state.something}</button>}
      </Consumer>
    );
  }
}

export default Button;

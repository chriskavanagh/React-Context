import React, { Component } from "react";
import { Provider } from "./buttonContext";

// const { Provider, Consumer } = React.createContext();

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: "Submit Email!"
    };
  }

  render() {
    return (
      <Provider value={{ state: this.state }}>{this.props.children}</Provider>
    );
  }
}

export default Container;

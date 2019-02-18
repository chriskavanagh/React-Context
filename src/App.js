import React, { Component } from "react";
import C from "./components/C";
import A from "./components/A";
import { UserProvider } from "./components/userContext";
import "./App.css";
import HelloWorld from "./components/HelloWorld";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Chris">
          <C />
        </UserProvider>
        <A />
        <HelloWorld />
      </div>
    );
  }
}

export default App;

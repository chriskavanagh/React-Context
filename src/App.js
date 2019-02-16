import React, { Component } from "react";
import C from "./components/C";
import A from "./components/A";
import { UserProvider } from "./components/userContext";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Chris">
          <C />
        </UserProvider>
        <A />
      </div>
    );
  }
}

export default App;

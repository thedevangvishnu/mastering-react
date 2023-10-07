import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // adding a constructor()
  constructor() {
    super();

    this.state = {
      name: "Devang",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;

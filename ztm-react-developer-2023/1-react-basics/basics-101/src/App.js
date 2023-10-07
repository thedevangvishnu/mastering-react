import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // adding a constructor()
  constructor() {
    super();

    this.state = {
      name: { firstName: "Devang", lastName: "Vishnu" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, I am {this.state.name.firstName} {this.state.name.lastName}{" "}
            and I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  console.log("updater function:", this.state); // before update
                  return { name: { firstName: "Amika", lastName: "khatri" } };
                },
                () => {
                  console.log("callback function: ", this.state); // after update
                }
              );
              // console.log(this.state);
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

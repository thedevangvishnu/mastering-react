// The counter should update based on the previous value
// Use of updater function.

import { Component } from "react";

class ClassCounter2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  decrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  incrementCountByFive = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
          <button onClick={this.decrementCount}>DECREMENT</button>
          <button onClick={this.resetCount}>RESET</button>
          <button onClick={this.incrementCount}>INCREMENT</button>
        </div>
        <button onClick={this.incrementCountByFive}>INCREMENT BY 5</button>
      </>
    );
  }
}

export default ClassCounter2;

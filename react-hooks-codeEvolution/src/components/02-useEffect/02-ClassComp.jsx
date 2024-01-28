// Create a class component that updates title of the document every time a button is clicked and lets the user know how many time the button was clicked
// use componentDidMount and componentDidUpdate
// Add an input and conditionally update in componentDidUpdate

import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updated");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  incrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { count } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <button onClick={this.incrementClick}>Click me: {count}</button>
      </div>
    );
  }
}

export default ClassComponent;

// Create a class component that updates title of the document every time a button is clicked and lets the user know how many time the button was clicked
// use componentDidMount and componentDidUpdate

import { Component } from "react";

class ClassTitle extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  incrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementClick}>Click me: {count}</button>
      </div>
    );
  }
}

export default ClassTitle;

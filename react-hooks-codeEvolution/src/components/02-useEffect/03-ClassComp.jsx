// Practice to run effect only once, on initial mount

import { Component } from "react";

class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    console.log("mounted");
    window.addEventListener("mousemove", this.getMousePosition);

    // Even though componentDidMount runs only once when the component initially mounts, the event listener it sets up continues to listen for the mousemove event for the entire lifecycle of the component. As a result, every time the mouse is moved, the getMousePosition function is called, and it updates the x and y values in the component's state.
  }

  componentWillUnmount() {
    console.log("unmounted");
    window.removeEventListener("mousemove", this.getMousePosition);
  }

  getMousePosition = (event) => {
    console.log("mouse event");
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div>
        <h3>X: {this.state.x}</h3>
        <h3>Y: {this.state.y}</h3>
      </div>
    );
  }
}

export default ClassComp;

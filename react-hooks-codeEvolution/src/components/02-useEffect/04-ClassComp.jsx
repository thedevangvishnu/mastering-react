// Practice cleaning up all side effects when the component unmounts
// use componentWillUnmount

import { Component } from "react";
import ClassComp from "./03-ClassComp";

class ClassMouse extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
    };
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>
          {this.state.display ? "Hide Mouse" : "Display Mouse"}
        </button>
        {this.state.display && <ClassComp />}
      </div>
    );
  }
}

export default ClassMouse;

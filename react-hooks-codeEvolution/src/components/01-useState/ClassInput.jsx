import { Component } from "react";

class ClassInput extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstname: "",
        lastname: "",
      },
    };
  }

  onFirstnameChange = (event) => {
    this.setState({
      name: {
        ...this.state.name,
        firstname: event.target.value,
      },
    });
  };

  onLastnameChange = (event) => {
    this.setState({
      name: {
        ...this.state.name,
        lastname: event.target.value,
      },
    });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            placeholder="Enter firstname"
            value={name.firstname}
            onChange={this.onFirstnameChange}
          />
          <input
            type="text"
            placeholder="Enter lastname"
            value={name.lastname}
            onChange={this.onLastnameChange}
          />
        </div>
        <h3>
          Your name: {name.firstname} {name.lastname}
        </h3>
      </>
    );
  }
}

export default ClassInput;

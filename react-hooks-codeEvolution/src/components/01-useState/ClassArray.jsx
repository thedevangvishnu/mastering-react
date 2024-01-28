import { Component } from "react";

class ClassArray extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  addItem = () => {
    this.setState({
      list: [
        ...this.state.list,
        {
          id: this.state.list.length,
          value: Math.floor(Math.random() * 10) + 1,
        },
      ],
    });
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <h2>Rendered List</h2>
        <button onClick={this.addItem}>Add random item</button>
        <div>
          {list.map((item) => {
            return (
              <div key={item.id}>
                <li>{item.value}</li>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ClassArray;

import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { placeholderText, onChangeHandler } = this.props;
    return (
      <input
        type="search"
        placeholder={placeholderText}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;

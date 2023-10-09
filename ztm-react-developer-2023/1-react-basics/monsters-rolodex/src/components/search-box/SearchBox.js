import { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { className, placeholderText, onChangeHandler } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholderText}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;

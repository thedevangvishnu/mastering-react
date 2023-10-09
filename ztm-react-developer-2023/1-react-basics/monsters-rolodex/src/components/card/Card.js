import { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2&size=200x200`}
          alt={name}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;

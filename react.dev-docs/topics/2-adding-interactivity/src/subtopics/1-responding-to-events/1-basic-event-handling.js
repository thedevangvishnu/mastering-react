import React from "react";
import "../global.css";

// learn to add basic event listeners to components

const Button = () => {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default Button;

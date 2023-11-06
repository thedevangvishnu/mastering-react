// understand the concept of state as a snapshot using this example.

import React from "react";
import { useState } from "react";
import "../global.css";

const Counter1 = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    // here setNumber() updates the value of state variable (which will be reflected in the next render). For this render, alert gets the same value of state variable that is stored as snapshot for this render
    setNumber(number + 5); // number + 5, in the next render.
    alert(number); // number in this render.
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>+5</button>
    </div>
  );
};

export default Counter1;

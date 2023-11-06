// understand the concept of state as a snapshot using this example.

import React from "react";
import { useState } from "react";
import "../global.css";

const Counter1 = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    // here setNumber() is called three times but the number variable is same because of the snapshot calculated from state in this render. The code down below is updating number + 1, three time, in which number (in all the three calls) has the current state value...0 in first, 1 in second and so on.
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>+3</button>
    </div>
  );
};

export default Counter1;

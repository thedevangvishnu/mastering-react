// using an example understand why mutating an object in React is not recommended
// how to update an object in state

import React from "react";
import { useState } from "react";
import "../global.css";
import "./1-moving-pointer.css";

const MovingPointer2 = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const changePointerPosition = (e) => {
    // using state setter function to update object by creating a new (but similar) object.
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="window" onPointerMove={changePointerPosition}>
      <div
        className="background__cursor"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
      <h1>Moving Pointer</h1>
    </div>
  );
};

/* 
    In the example below, the cursor is not moving due to following reasons:
        - state is not being updated using setter function
        - the object stored in state is being mutated which doesn't let React know the difference between changes in the object in this render and the last. Hence, React doesn't do anything in response.
*/

export const MovingPointer = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const changePointerPosition = (e) => {
    position.x = e.clientX;
    position.y = e.clientY;
  };

  return (
    <div className="window" onPointerMove={changePointerPosition}>
      <div
        className="background__cursor"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
      <h1>Moving Pointer</h1>
    </div>
  );
};

export default MovingPointer2;

// Practice to run effect only once, on initial mount

import { useState, useEffect } from "react";

const FunctionalComp = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect ran");
    window.addEventListener("mousemove", getMousePosition);

    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []);

  const getMousePosition = (event) => {
    console.log("mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <>
      <h2>X: {x}</h2>
      <h2>Y: {y}</h2>
    </>
  );
};

export default FunctionalComp;

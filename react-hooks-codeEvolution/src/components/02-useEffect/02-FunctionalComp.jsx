// Create a class component that updates title of the document every time a button is clicked and lets the user know how many time the button was clicked
// use useEffect
// conditionally use useEffect

import { useState, useEffect } from "react";

const FunctionalComp = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updated");
    document.title = `Clicked ${count} times`;
  }, [count]);

  const incrementClick = () => {
    setCount(count + 1);
  };

  const onInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <input type="text" value={name} onChange={onInputChange} />
      <button onClick={incrementClick}>Click me: {count}</button>
    </div>
  );
};

export default FunctionalComp;

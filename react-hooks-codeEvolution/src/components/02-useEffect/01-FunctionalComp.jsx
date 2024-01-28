// Create a class component that updates title of the document every time a button is clicked and lets the user know how many time the button was clicked
// use useEffect

import { useState, useEffect } from "react";

const FunctionalTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  const incrementClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementClick}>Click me: {count}</button>
    </div>
  );
};

export default FunctionalTitle;

import { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>INCREMENT</button>
    </>
  );
};

export default FunctionalCounter;

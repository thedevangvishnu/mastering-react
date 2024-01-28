import { useState } from "react";

const FunctionalCounter2 = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((c) => c - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  const incrementCountByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <button onClick={decrementCount}>DECREMENT</button>
        <button onClick={resetCount}>RESET</button>
        <button onClick={incrementCount}>INCREMENT</button>
      </div>
      <button onClick={incrementCountByFive}>INCREMENT BY 5</button>
    </>
  );
};

export default FunctionalCounter2;

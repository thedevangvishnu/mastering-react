// Create two counter (both having same value) that are independent of their state but use the same useReducer

import React, { useReducer } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "decrement":
      return currentState - 1;
    case "increment":
      return currentState + 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const CounterThree = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{countOne}</h1>
      <div className="btn-comps">
        <button onClick={() => dispatchOne("decrement")}>DECREMENT</button>
        <button onClick={() => dispatchOne("reset")}>RESET</button>
        <button onClick={() => dispatchOne("increment")}>INCREMENT</button>
      </div>

      <h1>{countTwo}</h1>
      <div className="btn-comps">
        <button onClick={() => dispatchTwo("decrement")}>DECREMENT</button>
        <button onClick={() => dispatchTwo("reset")}>RESET</button>
        <button onClick={() => dispatchTwo("increment")}>INCREMENT</button>
      </div>
    </div>
  );
};

export default CounterThree;

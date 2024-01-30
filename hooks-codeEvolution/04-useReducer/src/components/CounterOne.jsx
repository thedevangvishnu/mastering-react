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

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <div className="btn-comps">
        <button onClick={() => dispatch("decrement")}>DECREMENT</button>
        <button onClick={() => dispatch("reset")}>RESET</button>
        <button onClick={() => dispatch("increment")}>INCREMENT</button>
      </div>
    </div>
  );
};

export default CounterOne;

/*
useReducer hook:
    - allows to use reducer functions to manage state
    - useReducer(reducer, initialState)
        - reducer(currentState, action)
            - "action" is what dictates the state transition from currentState to newState
            - returns a new state
        - returns [newState, dispatch]
            - dispath method is used to specify "action"
*/

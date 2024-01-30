import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "incrementFirst":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrementFirst":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "incrementSecond":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrementSecond":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <div className="btn-comps">
        <button onClick={() => dispatch({ type: "decrementFirst", value: 1 })}>
          DECREMENT
        </button>
        <button onClick={() => dispatch({ type: "incrementFirst", value: 1 })}>
          INCREMENT
        </button>
      </div>

      <h1>{count.secondCounter}</h1>
      <div className="btn-comps">
        <button onClick={() => dispatch({ type: "decrementSecond", value: 5 })}>
          DECREMENT -5
        </button>
        <button onClick={() => dispatch({ type: "incrementSecond", value: 5 })}>
          INCREMENT +5
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;

// create a form which allows user to enter their name and once they enter, will also print a greeting message

// controlled inputs

import React from "react";
import { useState } from "react";
import "../global.css";

const Form2 = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  let firstName = first,
    lastName = last;

  const handleFirstNameChange = (e) => {
    firstName = e.target.value;
    setFirst(firstName);
  };

  const handleLastNameChange = (e) => {
    lastName = e.target.value;
    setLast(lastName);
  };

  const handleResetClick = () => {
    setFirst("");
    setLast("");
  };

  return (
    <div className="form__container">
      <form action="" className="form">
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </form>
      <h2>
        Hi, {firstName} {lastName}
      </h2>
      <button onClick={handleResetClick}>reset</button>
    </div>
  );
};

/* The Form below doesn't function as it it supposed to. All input's value are set to their respective variable and onChange event is defined so that each value in input target gets updated to their respective input.target.value. But nothing gets typed in the input field because
    - local variables are not part of a component's state and do no trigger re-render when their values change.
    - the values of each input is set to the local variables that are initialized as empty strings. 
*/

export const Form = () => {
  let firstName = "",
    lastName = "";

  const handleFirstNameChange = (e) => {
    firstName = e.target.value;
    console.log("firstName value: ", firstName); // here we see the firstName is being set to e.target.value on every onChange event.
  };

  const handleLastNameChange = (e) => {
    lastName = e.target.value;
  };

  const handleResetClick = () => {
    firstName = "";
    lastName = "";
  };

  return (
    <div className="form__container">
      <form action="" className="form">
        <input
          type="text"
          value={firstName} // but here value prop is set to firstName which is set to an empty string as changing local variables doesn't trigger re-render of the component.
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
      </form>
      <h2>
        Hi, {firstName} {lastName}
      </h2>
      <button onClick={handleResetClick}>reset</button>
    </div>
  );
};

export default Form2;

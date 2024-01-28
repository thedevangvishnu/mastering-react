// Updating objects in state.
// Use spread operator to persis object properties that you don't want to update

import { useState } from "react";

const FunctionalInput = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  const onFirstnameChange = (event) => {
    setName({ ...name, firstname: event.target.value });
  };

  const onLastnameChange = (event) => {
    setName({ ...name, lastname: event.target.value });
  };

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Enter firstname"
          value={name.firstname}
          onChange={onFirstnameChange}
        />
        <input
          type="text"
          placeholder="Enter lastname"
          value={name.lastname}
          onChange={onLastnameChange}
        />
      </div>
      <h3>
        Your name: {name.firstname} {name.lastname}
      </h3>
    </>
  );
};

export default FunctionalInput;

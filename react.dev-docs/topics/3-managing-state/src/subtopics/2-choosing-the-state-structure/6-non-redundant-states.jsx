import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2 className="app__title">Issue Tickets</h2>
      <div className="form">
        <label>
          First name:{" "}
          <input value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last name: <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <h3>
          Your ticket will be issued to: <b>{fullName}</b>
        </h3>
      </div>
    </>
  );
}

import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  //   Here fullname is a redundant state variable as it can be easily calculated using other state variables.

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
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

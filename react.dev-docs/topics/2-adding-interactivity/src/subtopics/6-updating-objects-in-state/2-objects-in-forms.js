// use spread operator to update objects in state.
// create a form in which allows to enter user details and then display the details entered.

import React from "react";
import { useState } from "react";
import "../global.css";

// handling multiple events using a single handler
const UserForm3 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form__container">
      <form action="" className="form">
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
      </form>
      <h2>User Details</h2>
      <h3>
        {user.firstName} {user.lastName} {user.email}
      </h3>
    </div>
  );
};

// In UserForm2, object stored in state is updated using the state setter function by creating a new object, which indeed triggers a re-render. Hence, the input fields are not taking inputs. Here, spread operator is used to copy the old object (as we don't want the email to change).
const UserForm2 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "abc@company.com",
  });

  const handleFirstNameChange = (e) => {
    setUser({
      ...user,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setUser({
      ...user,
      lastName: e.target.value,
    });
  };

  return (
    <div className="form__container">
      <form action="" className="form">
        <input
          type="text"
          value={user.firstName}
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          value={user.lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
        <input type="email" value={user.email} placeholder="Email" />
      </form>
      <h2>User Details</h2>
      <h3>
        {user.firstName} {user.lastName} {user.email}
      </h3>
    </div>
  );
};

// Changing local variables doesn't trigger a re-render. In UserForm1, due to object mutation, the object stored in state in getting changed directly. Input fields are not taking any inputs because their values are set to the initial object property value.
const UserForm1 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "abc@company.com",
  });

  const handleFirstNameChange = (e) => {
    user.firstName = e.target.value;
  };

  const handleLastNameChange = (e) => {
    user.lastName = e.target.value;
  };

  const handleEmailChange = (e) => {
    user.email = e.target.value;
  };

  return (
    <div className="form__container">
      <form action="" className="form">
        <input
          type="text"
          value={user.firstName}
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          value={user.lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />
        <input
          type="email"
          value={user.email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </form>
      <h2>User Details</h2>
      <h3>
        {user.firstName} {user.lastName} {user.email}
      </h3>
    </div>
  );
};

export default UserForm3;

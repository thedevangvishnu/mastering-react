import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/Theme.context";
import { UserContext } from "../contexts/User.context";
import LoginButton from "./LoginButton";

const LoginForm = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const themeClass = `login-form-${theme}-mode`;
  const canLogin = firstName.trim() !== "" && lastName.trim() !== "";

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleLoginClick = () => {
    setUser({
      firstName: firstName,
      lastName: lastName,
      isLoggedIn: true,
    });
  };

  return (
    <>
      <form action="" className={`login-form ${themeClass}`}>
        <input
          required
          type="text"
          placeholder="Enter firstname"
          value={firstName}
          onChange={onFirstNameChange}
        />
        <input
          required
          type="text"
          placeholder="Enter lastname"
          value={lastName}
          onChange={onLastNameChange}
        />
      </form>
      <div className="button-comps">
        <LoginButton disabled={!canLogin} onLoginClick={handleLoginClick}>
          LOGIN
        </LoginButton>
        {!canLogin && <p className="warning">Please fill in both inputs!</p>}
      </div>
    </>
  );
};

export default LoginForm;

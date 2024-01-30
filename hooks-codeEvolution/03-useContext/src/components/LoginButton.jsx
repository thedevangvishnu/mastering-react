import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context";
import { UserContext } from "../contexts/User.context";

const LoginButton = ({ children, disabled, onLoginClick }) => {
  const { theme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);

  const themeClass = `btn-${theme}-mode`;
  return (
    <button
      disabled={disabled}
      onClick={onLoginClick}
      className={`${themeClass}`}
    >
      {children}
    </button>
  );
};

export default LoginButton;

import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import { UserContext } from "../contexts/User.context";

const Panel = ({ title }) => {
  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  const themeClass = `${theme}-mode`;

  const handleLogoutClick = () => {
    setTimeout(() => {
      setUser({
        firstName: null,
        lastName: null,
        isLoggedIn: false,
      });
    }, 1000);
  };

  return (
    <div className={`panel ${themeClass}`}>
      <h2>
        {title} {user.firstName} {user.lastName}
      </h2>
      {user.isLoggedIn ? (
        <div>
          <p>You are logged in {user.firstName}</p>
          <LogoutButton onLogoutClick={handleLogoutClick}>LOG OUT</LogoutButton>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Panel;

import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context";
import { UserContext } from "../contexts/User.context";

const LogoutButton = ({ onLogoutClick, children }) => {
  const { theme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);

  const themeClass = `btn-${theme}-mode`;
  return (
    <button onClick={onLogoutClick} className={`${themeClass}`}>
      {children}
    </button>
  );
};

export default LogoutButton;

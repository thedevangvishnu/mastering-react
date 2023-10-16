import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log("current user: ", currentUser);
  const handleSingOutClick = async () => {
    await signOutAuthUser();
    setCurrentUser(null);
    console.log("sign out successful");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSingOutClick}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="authentication">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

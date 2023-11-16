// use Immer to update nested objects in state.

import React from "react";
import { useImmer } from "use-immer";
import "../global.css";

const UserProfile = () => {
  const initialUser = {
    firstName: "",
    lastName: "",
    email: "",
    project: {
      name: "New School of Growth",
      role: "",
      equity: "",
    },
  };
  const [user, updateUser] = useImmer(initialUser);

  const handleInputChange = (e) => {
    updateUser((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  const handleResetClick = () => {
    updateUser((draft) => {
      Object.assign(draft, initialUser);
    });
  };

  const handleProjectRoleChange = (e) => {
    updateUser((draft) => {
      draft.project.role = e.target.value;
    });
  };

  const handleProjectEquityChange = (e) => {
    updateUser((draft) => {
      draft.project.equity = e.target.value;
    });
  };

  return (
    <div>
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
          <input
            type="text"
            name="role"
            value={user.project.role}
            placeholder="Project role"
            onChange={handleProjectRoleChange}
          />
          <input
            type="text"
            name="email"
            value={user.project.equity}
            placeholder="Project equity"
            onChange={handleProjectEquityChange}
          />
        </form>
        <div className="app__buttons">
          <button onClick={handleResetClick}>reset</button>
        </div>
        <h1>Added Users</h1>
        <div className="all__users">
          <User eachUser={user} />
        </div>
      </div>
    </div>
  );
};

const User = ({ eachUser }) => {
  return (
    <div className="user__container">
      <img
        src="https://www.pngitem.com/pimgs/m/78-786501_black-avatar-png-user-icon-png-transparent-png.png"
        alt="user avatar"
      ></img>
      <div className="content">
        <h3>
          {eachUser.firstName} {eachUser.lastName}
        </h3>
        <p>{eachUser.email}</p>
        <div className="subcontent">
          <h4>Project details</h4>
          {/* <p>Name: {eachUser.project.name}</p> */}
          <p>Role: {eachUser.project.role}</p>
          <p>Equity: {eachUser.project.equity}%</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

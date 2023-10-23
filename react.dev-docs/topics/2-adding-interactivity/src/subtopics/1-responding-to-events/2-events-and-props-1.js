import React from "react";
import "../global.css";

// learn to pass props in event handlers

const Toolbar = () => {
  return (
    <div>
      <h2>This is a toolbar</h2>
      <div className="toolbar">
        <Button message="Playing!">Play movie</Button>
        <Button message="Uploading!">Upload file</Button>
        <Button message="Opening explore tab">Explore</Button>
      </div>
    </div>
  );
};

const Button = ({ children, message }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

export default Toolbar;

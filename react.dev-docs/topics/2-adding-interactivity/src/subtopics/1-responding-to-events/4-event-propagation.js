import React from "react";
import "../global.css";

// understand how events propagate in React

const Toolbar = () => {
  return (
    <div
      onClick={() => {
        alert("You clicked the main div");
      }}
    >
      <h2>This is a toolbar</h2>
      <div
        onClick={() => {
          alert("You clicked the toolbar");
        }}
        className="toolbar"
      >
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

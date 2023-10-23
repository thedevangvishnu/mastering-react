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
        onClick={(e) => {
          e.stopPropagation(); // you can stop propagation at any stage in the tree
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
  const handleClick = (e) => {
    // e.stopPropagation();
    alert(message);
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Toolbar;

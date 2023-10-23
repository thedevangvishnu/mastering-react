import React from "react";
import "../global.css";

// learn to pass event handlers as props, practice defining event handlers in multiple styles and using custom names for events

const Toolbar = () => {
  return (
    <div>
      <h2>My Toolbar</h2>
      <div className="toolbar">
        <Play movieName={"Jawaan"} />
        <Upload />
        <Explore />
      </div>
    </div>
  );
};

const Play = ({ movieName }) => {
  return (
    <AlertBtn onSmash={() => alert(`Playing ${movieName}`)}>
      Play {movieName} movie
    </AlertBtn>
  );
};

const Upload = () => {
  return (
    <AlertBtn onSmash={() => alert("Uploading...")}>Upload files</AlertBtn>
  );
};

const Explore = () => {
  return (
    <AlertBtn onSmash={() => alert("Opening explore menu...")}>
      Explore movies
    </AlertBtn>
  );
};

const AlertBtn = ({ children, onSmash }) => {
  return <button onClick={onSmash}>{children}</button>;
};

export default Toolbar;

// Add an alert to the click handler. When the light is green and says “Walk”, clicking the button should say “Stop is next”. When the light is red and says “Stop”, clicking the button should say “Walk is next”.

import React from "react";
import { useState } from "react";
import "../global.css";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next"); // added this line
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
          marginTop: "2rem",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}

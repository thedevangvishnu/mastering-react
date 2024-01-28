// Practice cleaning up from useEffect

import { useState, useEffect } from "react";
import FunctionalComp from "./03-FunctionalComp";

const HookMouse = () => {
  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <button onClick={toggleDisplay}>{display ? "Hide" : "Display"}</button>
      {display && <FunctionalComp />}
    </div>
  );
};

export default HookMouse;

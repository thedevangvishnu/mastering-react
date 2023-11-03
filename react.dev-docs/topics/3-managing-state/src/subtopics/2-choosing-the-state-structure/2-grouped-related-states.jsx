import { useState } from "react";

const MovingDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //   Here, "position" state variable contains information for both x and y

  const handlePointerMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="dot__container" onPointerMove={handlePointerMove}>
      <div
        className="moving__dot"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
};

export default MovingDot;

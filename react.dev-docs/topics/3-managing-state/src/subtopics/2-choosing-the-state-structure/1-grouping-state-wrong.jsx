import { useState } from "react";

const MovingDot = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  //   Here, there are two separate state variables. But both of them need to update simultaneously. In such structure, it's common to update one and forget about the second. Hence, these two separate state variables can be grouped together in one state only.

  const handlePointerMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div className="dot__container" onPointerMove={handlePointerMove}>
      <div
        className="moving__dot"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      ></div>
    </div>
  );
};

export default MovingDot;

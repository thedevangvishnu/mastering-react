// Implement the same counter tick using hooks
import { useState, useEffect } from "react";

const HookIntervalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const tick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default HookIntervalCounter;

import { memo } from "react";

const Display = ({ text, value }) => {
  console.log(`Rendering ${text}`);
  return (
    <h2 style={{ border: "1px solid grey", padding: "1rem" }}>
      {text}: {value}
    </h2>
  );
};

export default memo(Display);

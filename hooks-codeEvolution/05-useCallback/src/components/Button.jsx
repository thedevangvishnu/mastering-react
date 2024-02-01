import { memo } from "react";

const Button = ({ id, text, onButtonClick }) => {
  console.log(`Rendering ${id} ${text}`);
  return (
    <button
      style={{ alignSelf: "center", padding: "1rem 1.5rem" }}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default memo(Button);

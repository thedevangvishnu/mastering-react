import { memo } from "react";

const Title = ({ title }) => {
  console.log(`Rendering ${title}`);
  return <h1>{title}</h1>;
};

export default memo(Title);

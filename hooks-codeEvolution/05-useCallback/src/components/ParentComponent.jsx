import { useState } from "react";
import Title from "./Title";
import Display from "./Display";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(50000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <>
      <Title title="useCallback Hook" />
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <Display text="Age" value={age} />
        <Button id="age" text="INCREMENT" onButtonClick={incrementAge} />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Display text="Salary" value={salary} />
        <Button id="salary" text="INCREMENT" onButtonClick={incrementSalary} />
      </div>
    </>
  );
};

export default ParentComponent;

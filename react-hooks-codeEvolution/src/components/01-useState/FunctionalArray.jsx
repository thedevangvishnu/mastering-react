// Practice updating arrays using useSate.
import { useState } from "react";

const FunctionalArray = () => {
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([
      ...list,
      {
        id: list.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <>
      <h2>Rendered List</h2>
      <button onClick={addItem}>Add random item</button>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.value}</li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FunctionalArray;

import React from "react";

export default function List() {
  return (
    <div style={{ padding: "1rem", textAlign: "left" }}>
      <div>
        <h2>ToDo List 1</h2>
        <ItemA name={"Study react"} isCompleted={true} />
        <ItemA name={"Study js"} isCompleted={true} />
        <ItemA name={"Run 5km"} isCompleted={true} />
        <ItemA name={"Watch an AP video"} isCompleted={false} />
        <ItemA name={"Rest"} isCompleted={true} />
      </div>

      <div>
        <h2>ToDo List 2</h2>
        <ItemB name={"Buy shampoo"} isCompleted={false} />
        <ItemB name={"Eat banana"} isCompleted={true} />
        <ItemB name={"Write notes"} isCompleted={false} />
        <ItemB name={"Have lunch"} isCompleted={false} />
        <ItemB name={"Rest"} isCompleted={false} />
      </div>

      <div>
        <h2>ToDo List 3</h2>
        <ItemC name={"Take bath"} isCompleted={true} />
        <ItemC name={"Wash clothes"} isCompleted={true} />
        <ItemC name={"Run 5km"} isCompleted={true} />
        <ItemC name={"Watch an AP video"} isCompleted={true} />
        <ItemC name={"Rest"} isCompleted={true} />
      </div>
    </div>
  );
}

// 1: Using if statements and then return jsx

function ItemA({ name, isCompleted }) {
  if (isCompleted) {
    return <li>{name + " ✔"}</li>;
  } else {
    return <li>{name + " ❌"}</li>;
  }
}

// 2: Inside jsx, using ternary operators

function ItemB({ name, isCompleted }) {
  return <li>{isCompleted ? name + " ✔" : name + " ❌"}</li>;
}

// 3:  Using "if" control statements to check condition and save jsx in a new variable and then return this new variable using {}

function ItemC({ name, isCompleted }) {
  let item = name;
  if (isCompleted) {
    item += " ✔ ";
  } else {
    item += " ❌";
  }

  return <li>{item}</li>;
}

// 4: Using shorthands

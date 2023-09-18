import React from "react";
import "../global.css";

export default function Gallery() {
  return (
    <section>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

function Profile() {
  return (
    <div>
      <h2>Albert Einstein</h2>
      <img
        src="https://i.natgeofe.com/n/34861553-e7b4-441d-af1f-3f91b21b1755/01-einstein-other-inventions_3x4.jpg"
        alt="Albert Einstein"
        width={300}
        height={400}
      />
    </div>
  );
}

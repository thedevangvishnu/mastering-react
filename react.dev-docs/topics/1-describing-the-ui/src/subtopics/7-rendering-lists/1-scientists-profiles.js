import React from "react";
import { scientists } from "./scientists";
import "./gallery.css";

export default function Gallery() {
  const filterScientists = scientists.filter(
    (scientist) => scientist.books.length > 0
  );

  return (
    <section className="container">
      <h1>All scientists</h1>
      <div className="gallery">
        {scientists.map((scientist) => {
          return <Profile {...scientist} />;
        })}
      </div>

      <h1>Scientists who have books</h1>
      <div className="gallery">
        {filterScientists.map((scientist) => (
          <Profile {...scientist} />
        ))}
      </div>
    </section>
  );
}

function Profile(props) {
  let { id, name, picture, work, famousFor, books, awards } = props;
  return (
    <div className="profile" key={id}>
      <img src={picture} />
      <div className="content">
        <h2 className="name">{name}</h2>
        <p>Famous for: {famousFor}</p>
        <p>Major work: {work}</p>
      </div>
    </div>
  );
}

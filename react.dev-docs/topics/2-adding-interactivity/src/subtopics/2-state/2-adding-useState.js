// understand useState() using a basic example of displaying list items

import React from "react";
import { useState } from "react";
import { sculptureList } from "../../assets/sculptures";
import "../global.css";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  let sculpture = sculptureList[index];
  const { name, artist, url, alt, description } = sculpture;

  const handleClick = () => {
    setIndex(index + 1); // the code crashes when the index exceeds list length.
  };

  return (
    <div className="gallery">
      <h1>A Simple Gallery</h1>
      <div className="galleryItem">
        <img src={url} alt={alt} />
        <p>
          ({index + 1} of {sculptureList.length})
        </p>
        <h2>
          <i>{name}</i> by {artist}
        </h2>
        <p>{description}</p>
      </div>
      <button onClick={handleClick}>next</button>
    </div>
  );
};

export default Gallery;

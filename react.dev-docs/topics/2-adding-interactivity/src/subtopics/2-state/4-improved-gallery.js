// practice using multiple useState() using a basic example of displaying list items

// add a previous button which should be only enabled when the index is greater than the first item.
// put the same logic for next button

import React from "react";
import { useState } from "react";
import { sculptureList } from "../../assets/sculptures";
import "../global.css";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  let sculpture = sculptureList[index];
  const { name, artist, url, alt, description } = sculpture;

  let hasPrev, hasNext;
  hasPrev = index > 0;
  hasNext = index < sculptureList.length - 1;

  const handlePrevClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handleShowClick = () => {
    setShowDescription(!showDescription);
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
        {/* add a show-hide button which when clicked will show-hide the description and also change the message inside the button */}
        <button className="show__hide" onClick={handleShowClick}>
          {showDescription ? "Hide" : "Show"} details
        </button>
        {/* here we have used && to check if the value of showDescription and then update the description accordingly */}
        {showDescription && <p>{description}</p>}
      </div>
      <div className="navigation__btns">
        <button onClick={handlePrevClick}>prev</button>
        <button onClick={handleNextClick} disabled={!hasNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default Gallery;

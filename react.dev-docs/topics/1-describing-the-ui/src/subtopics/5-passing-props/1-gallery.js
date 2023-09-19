import React from "react";

export default function Gallery() {
  return (
    <section>
      <Profile
        person={"Albert Einstein"}
        imgUrl={
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg"
        }
        size={300}
      />
      <Profile
        person={"Marie Curie"}
        imgUrl={
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-50694623.jpg"
        }
      />
    </section>
  );
}

function Profile(props) {
  let { person, imgUrl, size = 300 } = props;
  return (
    <div>
      <h2>{person}</h2>
      <img src={imgUrl} width={size} height={size} />
    </div>
  );
}

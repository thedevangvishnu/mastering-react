import React from "react";
import ProfileCard from "./components/profile-card/ProfileCard.component";
import imagePath from "./assets/images/image-victor.jpg";
import bgPatternTop from "./assets/images/bg-pattern-top.svg";
import bgPatternBottom from "./assets/images/bg-pattern-bottom.svg";

const userProfile = {
  profileImage: imagePath,
  name: "Victor Crest",
  age: 26,
  city: "London",
  followers: "80K",
  likes: "804K",
  photos: "1.4K",
};

const App = () => {
  return (
    <div className="bg-darkCyan h-screen w-full relative overflow-hidden">
      <img
        src={bgPatternTop}
        alt=""
        className="absolute xs:top-[-10%] xs:left-[-15%] xs:w-3/4 sm:top-[-20%] sm:left-[-10%] lg:top-[-60%] lg:left-[-10%] w-3/5 "
      />
      <div className="h-screen w-full flex justify-center items-center relative z-10">
        <ProfileCard profile={userProfile} />
      </div>
      <img
        src={bgPatternBottom}
        alt=""
        className="absolute xs:bottom-[-10%] xs:right-[-20%] xs:w-3/4 sm:bottom-[-20%] sm:right-[-20%] lg:bottom-[-90%] lg:right-[-10%] w-3/5"
      />
    </div>
  );
};

export default App;

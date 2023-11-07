import topBackground from "../../assets/images/bg-pattern-top-desktop.svg";
import bottomBackground from "../../assets/images/bg-pattern-bottom-desktop.svg";
import SectionContent from "../section-content/SectionContent";

const SocialProofSection = () => {
  return (
    <div className="w-screen h-screen relative flex flex-col items-center justify-center">
      {/* top left background */}
      <img src={topBackground} alt="" className="absolute top-0 left-0 w-2/5" />

      {/* section content container*/}

      <SectionContent />

      {/* bottom right background */}
      <img
        src={bottomBackground}
        alt=""
        className="absolute right-0 bottom-0 w-1/2"
      />
    </div>
  );
};

export default SocialProofSection;

import { useState, useEffect } from "react";

const defaultMargin = { marginTop: "0px" };

const ReviewCard = ({ reviewItem, itemPosition }) => {
  const marginTopForNext = itemPosition * 20;

  const [marginStyle, setMarginStyle] = useState({
    marginTop: `${marginTopForNext}px`,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setMarginStyle(defaultMargin);
      } else {
        const marginTopForNextCard = itemPosition * 20;
        setMarginStyle({ marginTop: `${marginTopForNextCard}px` });
      }
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [itemPosition]);

  const { image, name, review } = reviewItem;

  return (
    <div
      className="xs:w-11/12 md:w-72 lg:w-80 h-52 flex flex-col xs:gap-6 md:gap-2 lg:gap-4 xs:px-8 md:px-4 lg:px-9 xs:py-8 md:py-6 lg:py-8 bg-magenta-300 rounded-lg justify-center "
      style={marginStyle}
    >
      <div className="flex gap-5 items-center">
        <img
          src={image}
          alt={`${name}'s review`}
          className="w-12 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-white font-semibold text-lg">Colton Smith</p>
          <p className="text-softPink -mt-1">Verified Buyer</p>
        </div>
      </div>
      <p className="text-magenta-100 text-sm ">"{review}"</p>
    </div>
  );
};

export default ReviewCard;

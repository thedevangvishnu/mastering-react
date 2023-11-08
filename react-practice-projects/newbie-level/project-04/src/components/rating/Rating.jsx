import star from "../../assets/images/icon-star.svg";
import { useState, useEffect } from "react";

const defaultMargin = { marginLeft: "0px" };

const Rating = ({ margin }) => {
  const [marginLeft, setMarginLeft] = useState(defaultMargin);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        setMarginLeft({ marginLeft: `${margin}px` });
      } else {
        setMarginLeft(defaultMargin);
      }
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [margin]);

  return (
    <div
      className={`bg-magenta-100 xs:flex-col flex flex-row items-center xs:p-4 p-3 relative xs:gap-2 gap-8 xs:w-full w-3/4 rounded-lg`}
      style={marginLeft}
    >
      <div className="flex items-center gap-1 h-full">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <img key={index} src={star} alt="Star icon to display rating" />
          ))}
      </div>
      <p className=" text-lg text-magenta-300 font-semibold">
        Rated 5 stars in Reviews
      </p>
    </div>
  );
};

export default Rating;

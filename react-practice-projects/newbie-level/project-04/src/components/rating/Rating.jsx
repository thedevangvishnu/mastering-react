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
      className={`bg-magenta-100 xs:flex-col flex md:flex-row items-center xs:p-4 md:p-3 relative xs:gap-2 md:gap-4 lg:gap-6 xl:gap-10 xs:w-full md:w-3/4 rounded-md`}
      style={marginLeft}
    >
      <div className="flex items-center gap-1 h-full">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <img
              key={index}
              src={star}
              alt="Star icon to display rating"
              className="md:w-3 lg:w-full"
            />
          ))}
      </div>
      <p className="md:text-sm lg:text-base text-magenta-300 font-semibold">
        Rated 5 stars in Reviews
      </p>
    </div>
  );
};

export default Rating;

import star from "../../assets/images/icon-star.svg";

const Rating = ({ margin, minWidth }) => {
  let marginStyles;

  if (window.innerWidth >= 768) {
    marginStyles = { marginLeft: `${margin}px` };
  } else {
    marginStyles = { marginLeft: "0px" };
  }

  //   const marginStyles = margin !== undefined ? `ml-${margin}` : "";

  return (
    <div
      className={`bg-magenta-100 xs:flex-col flex flex-row items-center xs:p-4 p-3 relative xs:gap-2 gap-8 xs:w-full w-3/4 rounded-lg`}
      style={marginStyles}
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

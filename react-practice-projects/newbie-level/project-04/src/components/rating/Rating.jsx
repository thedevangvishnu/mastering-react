import star from "../../assets/images/icon-star.svg";

const Rating = ({ margin }) => {
  const marginStyles =
    margin !== undefined ? { marginLeft: `${margin}rem` } : {};
  return (
    <div
      className={`bg-magenta-100 flex items-center p-3 relative gap-8 w-3/4 rounded-lg `}
      style={marginStyles}
    >
      <div className="flex items-center gap-1 h-full">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <img key={index} src={star} alt="Star icon to display rating" />
          ))}
      </div>
      <p className=" text-lg">Rated 5 stars in Reviews</p>
    </div>
  );
};

export default Rating;

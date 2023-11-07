import photo from "../../assets/images/image-colton.jpg";

const ReviewCard = ({ image, name, review }) => {
  return (
    <div className="w-80 h-48 flex flex-col gap-4 p-6 bg-magenta-300 rounded-lg">
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
      <p className="text-magenta-100 text-sm">{review}</p>
    </div>
  );
};

export default ReviewCard;
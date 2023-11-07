import Rating from "../rating/Rating";
import ReviewCard from "../review-card/ReviewCard";
import { reviews } from "../../assets/reviews";

const SectionContent = () => {
  return (
    <div className="w-full h-screen relative flex flex-col gap-10 px-32 py-16 font-display">
      {/* upper section */}
      <div className="w-full flex">
        {/* upper left */}
        <div className="flex flex-col gap-2 w-1/2">
          <h2 className="w-2/3 text-5xl font-bold text-magenta-300">
            10,000+ of our users love our products.
          </h2>
          <p className="w-2/3">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        {/* upper right */}
        <div className="flex flex-col gap-4 w-1/2 ">
          <Rating margin={0} />
          <Rating margin={2.5} />
          <Rating margin={5} />
        </div>
      </div>

      {/* lower section */}
      <div className="flex gap-10 w-full">
        {reviews.map((reviewItem) => (
          <ReviewCard key={reviewItem.id} reviewItem={reviewItem} />
        ))}
      </div>
    </div>
  );
};

export default SectionContent;

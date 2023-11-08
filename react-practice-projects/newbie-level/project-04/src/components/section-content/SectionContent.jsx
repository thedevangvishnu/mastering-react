import Rating from "../rating/Rating";
import ReviewCard from "../review-card/ReviewCard";
import { reviews } from "../../assets/reviews";

const SectionContent = () => {
  return (
    <div className="md:w-full md:h-screen relative flex flex-col gap-10  xs:px-4 md:px-12 lg:px-32 py-16 font-display">
      {/* upper section */}
      <div className="w-full xs:flex-col xs:gap-6 md:gap-0 lg:gap-2 xs:items-center flex md:flex-row">
        {/* upper left */}
        <div className="flex flex-col xs:gap-4 md:gap-4 xl:gap-2 xs:w-full xs:items-center md:w-1/2">
          <h2 className="xs:w-2/3 md:w-11/12 lg:w-full xl:pr-32 xs:text-center md:text-left xs:text-4xl lg:text-5xl font-bold text-magenta-300">
            10,000+ of our users love our products.
          </h2>
          <p className="xs:w-11/12 lg:w-full xl:pr-24  xs:text-center md:text-left text-slate-600">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>

        {/* upper right */}
        <div className="flex flex-col gap-4 xs:w-11/12 md:w-1/2 ">
          <Rating margin={0} />
          <Rating margin={25} />
          <Rating margin={50} />
        </div>
      </div>

      {/* lower section */}
      <div className="xs:flex-col xs:items-center xs:pb-8 md:pb-0 flex md:flex-row xs:gap-8 md:gap-4 xl:gap-10 w-full">
        {reviews.map((reviewItem) => (
          <ReviewCard key={reviewItem.id} reviewItem={reviewItem} />
        ))}
      </div>
    </div>
  );
};

export default SectionContent;

import PricingCard from "./PricingCard";

const PricingList = ({ subscription }) => {
  return (
    <div className="flex">
      {subscription.map((item) => (
        <PricingCard card={item} key={item.id} />
      ))}
    </div>
  );
};

export default PricingList;

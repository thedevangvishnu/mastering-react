const PricingCard = ({ card }) => {
  const { name, price, storage, usersAllowed, sendUpto } = card;
  return (
    <div className="w-72 h-80 bg-white shadow-y-xl p-4 rounded-xl ">
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <p>{storage} Storage</p>
        <p>{usersAllowed} Users Allowed</p>
        <p>Send up to {sendUpto}</p>
      </div>
    </div>
  );
};

export default PricingCard;

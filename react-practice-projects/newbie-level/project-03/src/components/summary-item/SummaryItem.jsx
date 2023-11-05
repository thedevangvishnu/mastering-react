const SummaryItem = ({ image, name, score, bgColor, color }) => {
  return (
    <div className={`flex items-center p-3  ${bgColor} rounded-md`}>
      <img src={image} alt={`${name} icon`} className="w-4" />
      <h4 className={`${color} font-bold text-xs ml-1`}>{name}</h4>
      <p className="text-xs ml-auto text-darkGrayBlue">
        <span className="font-semibold">{score} </span>/100
      </p>
    </div>
  );
};

export default SummaryItem;

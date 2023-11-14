const ResultItem = ({ label, amount }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col ">
        <p className="text-customCyan-50 text-xs font-bold">{label}</p>
        <p className="text-customCyan-200 text-xs">/ person</p>
      </div>
      <p className="text-customCyan-600 text-4xl font-bold">${amount}</p>
    </div>
  );
};

export default ResultItem;

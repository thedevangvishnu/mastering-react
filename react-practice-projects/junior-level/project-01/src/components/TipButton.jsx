const TipButton = ({ tip }) => {
  if (tip === "Custom") {
    return (
      <button className="bg-customCyan-100 text-customCyan-400 rounded-md py-1.5 px-2 w-full text-medium font-bold">
        {tip}
      </button>
    );
  }
  return (
    <button className="bg-customCyan-500 rounded-md py-1.5 px-2 w-full text-medium text-customCyan-50 font-bold">
      {tip}%
    </button>
  );
};

export default TipButton;

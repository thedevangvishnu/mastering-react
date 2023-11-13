const TipButton = ({ tip }) => {
  return (
    <button className="bg-customCyan-500 rounded-md py-2 px-4 w-full text-xl text-customCyan-50 font-bold">
      {tip}%
    </button>
  );
};

export default TipButton;

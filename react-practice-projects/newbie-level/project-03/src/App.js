import SummaryItems from "./components/summary-items/SummaryItems";

const App = () => {
  return (
    // background
    <div className="bg-slate-200 font-display w-ful h-screen flex items-center justify-center">
      {/* container div */}
      <div className="w-1/3 h-3/5 bg-white rounded-2xl relative shadow-2xl flex">
        {/* left seciton */}
        <div className="w-1/2 h-full bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue rounded-2xl flex flex-col items-center gap-7 text-center py-5 px-6">
          <h3 className="text-lightLavender font-semibold">Your Result</h3>

          {/* circle */}
          <div className="w-9/12 h-2/5 rounded-full bg-gradient-to-b from-violetBlue to-persianBlue flex flex-col items-center justify-center">
            <p className="text-5xl font-bold text-paleBlue">76</p>
            <p className="text-lightLavender text-sm">of 100</p>
          </div>

          {/* content */}
          <div className="flex flex-col gap-1 items-center">
            <h3 className="text-paleBlue text-xl font-semibold">Great</h3>
            <p className="text-xs text-lightLavender w-11/12">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        {/* right section */}
        <div className="w-1/2 flex flex-col items-start py-5 px-6 gap-3 relative">
          <h3 className="text-darkGrayBlue font-bold text-md">Summary</h3>
          {/* summary items */}
          <SummaryItems />

          <button className="py-3 text-xs text-white  bg-darkGrayBlue w-full rounded-3xl mt-3 tracking-wider font-semibold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

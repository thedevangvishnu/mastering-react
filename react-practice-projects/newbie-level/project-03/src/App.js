import reactionIcon from "./assets/images/icon-reaction.svg";
import memoryIcon from "./assets/images/icon-memory.svg";
import verbalIcon from "./assets/images/icon-verbal.svg";
import visualIcon from "./assets/images/icon-visual.svg";

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
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center p-3  bg-lightRed-100 rounded-md">
              <img src={reactionIcon} alt="Reaction icon" className="w-4" />
              <h4 className="text-lightRed-200 font-bold text-xs ml-1">
                Reaction
              </h4>
              <p className="text-xs ml-auto text-darkGrayBlue">
                <span className="font-semibold">80 </span>/100
              </p>
            </div>

            <div className="flex items-center p-3  bg-orangeyYellow-100 rounded-md">
              <img src={memoryIcon} alt="memory icon" className="w-4" />
              <h4 className="text-orangeyYellow-200 font-bold text-xs ml-1">
                Memory
              </h4>
              <p className="text-xs ml-auto text-darkGrayBlue">
                <span className="font-semibold">92 </span>/100
              </p>
            </div>

            <div className="flex items-center p-3  bg-greenTeal-100 rounded-md">
              <img src={verbalIcon} alt="Verbal icon" className="w-4" />
              <h4 className="text-greenTeal-200 font-bold text-xs ml-1">
                Verbal
              </h4>
              <p className="text-xs ml-auto text-darkGrayBlue">
                <span className="font-semibold">61 </span>/100
              </p>
            </div>

            <div className="flex items-center p-3  bg-cobaltBlue-100 rounded-md">
              <img src={visualIcon} alt="Visual icon" className="w-4" />
              <h4 className="text-cobaltBlue-200 font-bold text-xs ml-1">
                Visual
              </h4>
              <p className="text-xs ml-auto text-darkGrayBlue">
                <span className="font-semibold">72 </span>/100
              </p>
            </div>
          </div>

          <button className="py-3 text-xs text-white  bg-darkGrayBlue w-full rounded-3xl mt-3 tracking-wider font-semibold">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

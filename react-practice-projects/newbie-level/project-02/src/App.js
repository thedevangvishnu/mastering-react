import backgroundImage from "./assets/images/pattern-background-desktop.svg";
import heroImage from "./assets/images/illustration-hero.svg";
import musicIcon from "./assets/images/icon-music.svg";

const App = () => {
  return (
    <div className="h-screen w-full bg-paleBlue ">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="SVG background pattern for desktop"
        className="absolute top-[-10%] w-full"
      />

      {/* Centered container */}
      <div className="h-screen w-full absolute top-0 flex items-center justify-center ">
        <div className="w-72 h-auto bg-slate-50 rounded-2xl shadow-xl relative flex flex-col">
          <img
            src={heroImage}
            alt="Hero background music illustration"
            className="rounded-t-2xl w-full"
          />
          <div className="py-4 px-6 flex flex-col gap-2">
            {/* Order summary section */}
            <div className="flex flex-col items-center text-center mt-2 gap-2">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <p className="text-xxs w-11/12 text-slate-500 leading-4">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
            </div>

            {/* Subscription section */}
            <div className="flex items-center p-4 bg-veryPaleBlue rounded-md">
              {/* music icon */}
              <div>
                <img className="w-8" src={musicIcon} alt="Music Icon" />
              </div>
              {/* details */}
              <div className="ml-2">
                <h3 className="text-xs font-bold">Annual Plan</h3>
                <p className="text-xs text-slate-600">$59.99/year</p>
              </div>
              <div className="ml-auto">
                <a
                  className="text-xxs text-brightBlue font-bold hover:text-desaturatedBlue underline ease-linear"
                  href="#"
                >
                  Change
                </a>
              </div>

              {/* change button */}
            </div>

            {/* Buttons */}
            <div className="flex flex-col itmes-center gap-4 mt-4 pb-4">
              <button className="text-xs p-3 w-full bg-brightBlue text-white font-semibold rounded-xl shadow-xl hover:bg-desaturatedBlue ease-linear">
                Proceed to Payment
              </button>
              <button className="text-xs font-semibold text-slate-600 hover:text-darkBlue ease-linear">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

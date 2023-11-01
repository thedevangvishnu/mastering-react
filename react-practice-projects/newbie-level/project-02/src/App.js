import backgroundImageDesktop from "./assets/images/pattern-background-desktop.svg";
import backgroundImageMobile from "./assets/images/pattern-background-mobile.svg";

import OrderSummary from "./components/order-summary/OrderSummary";

const App = () => {
  return (
    <div className="h-screen w-full bg-paleBlue ">
      {/* Background image */}
      <picture className="relative top-[-40%] w-full h-full">
        <source srcSet={backgroundImageMobile} media="(min-width: 375px)" />
        {/* <source srcSet={backgroundImageDesktop} media="(min-width: 768px)" /> */}
        <img
          src={backgroundImageDesktop}
          alt="SVG background pattern for desktop"
          className="w-full h-full"
        />
      </picture>

      {/* Centered container */}
      <div className="h-screen w-full absolute top-0 flex items-center justify-center ">
        <OrderSummary />
      </div>
    </div>
  );
};

export default App;

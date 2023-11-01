import backgroundImage from "./assets/images/pattern-background-desktop.svg";

import OrderSummary from "./assets/components/order-summary/OrderSummary";

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
        <OrderSummary />
      </div>
    </div>
  );
};

export default App;

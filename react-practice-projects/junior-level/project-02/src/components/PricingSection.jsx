import React, { useState } from "react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleBillingCycle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 gap-4">
      <h2>Our Pricing</h2>
      <div className="flex items-center gap-3">
        <p
          className={`cursor-pointer ${isAnnual ? "font-bold" : ""}`}
          onClick={toggleBillingCycle}
        >
          Annually
        </p>
        <div
          className={`w-12 h-8 rounded-xl flex items-center bg-grayishBlue-200 cursor-pointer ${
            isAnnual ? "bg-green-500" : ""
          }`}
          onClick={toggleBillingCycle}
        >
          <input
            type="checkbox"
            className="appearance-none w-full h-full"
            checked={isAnnual}
            readOnly
          />
        </div>
        <p
          className={`cursor-pointer ${!isAnnual ? "font-bold" : ""}`}
          onClick={toggleBillingCycle}
        >
          Monthly
        </p>
      </div>
      <div>{/* all pricing items */}</div>
    </div>
  );
};

export default PricingSection;

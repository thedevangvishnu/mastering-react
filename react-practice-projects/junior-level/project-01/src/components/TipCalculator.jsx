import { useState } from "react";
import Input from "./Input";
import TipButton from "./TipButton";
import userIcon from "../assets/images/icon-person.svg";
import dollarIcon from "../assets/images/icon-dollar.svg";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTip = (e) => {
    const tipPercent = parseInt(e.target.textContent.replace("%", ""));

    const tipAmountPerPerson = (bill * (tipPercent / 100)) / numberOfPeople;
    setTip(tipAmountPerPerson);
    const totalAmountPerPerson = bill / numberOfPeople + tipAmountPerPerson;
    setTotal(totalAmountPerPerson);
  };
  return (
    <div className="w-3/4 h-2/3 bg-customCyan-50 rounded-xl shadow-xl p-6 flex gap-4">
      {/* left section */}
      <div className="w-1/2">
        <Input label="Bill" icon={dollarIcon} />
      </div>

      {/* right section */}
      <div className="w-1/2 h-full bg-customCyan-500 rounded-xl"></div>
    </div>
  );
};

export default TipCalculator;

/*
 <Input label="name" icon={userIcon} />
      <TipButton tip="5" />
      <label htmlFor="">Bill</label>
      <input
        className="border-2 border-slate-600 p-2"
        type="number"
        placeholder="Bill amount"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <button className="bg-green-400 w-32 p-2" onClick={calculateTip}>
        5%
      </button>
      <button className="bg-green-400 w-32 p-2" onClick={calculateTip}>
        10%
      </button>
      <label htmlFor="">Number of People</label>
      <input
        className="border-2 border-slate-600 p-2"
        type="number"
        placeholder="number of people"
        value={numberOfPeople}
        onChange={(e) => setNumberOfPeople(e.target.value)}
      />
      <h2 className="text-3xl">
        tip amount / person: <span className="font-bold">${tip}</span>
      </h2>
      <h2 className="text-3xl">
        total amount / person: <span className="font-bold">${total}</span>
      </h2>
      <button className="bg-green-400 w-32 p-2">Reset</button>
*/

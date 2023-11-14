import { useState } from "react";
import Input from "./Input";
import TipButton from "./TipButton";
import userIcon from "../assets/images/icon-person.svg";
import dollarIcon from "../assets/images/icon-dollar.svg";
import ResultItem from "./ResultItem";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const tipOptions = [5, 10, 15, 25, 50, "Custom"];

  const calculateTip = (e) => {
    const tipPercent = parseInt(e.target.textContent.replace("%", ""));

    const tipAmountPerPerson = (bill * (tipPercent / 100)) / numberOfPeople;
    setTip(tipAmountPerPerson);
    const totalAmountPerPerson = bill / numberOfPeople + tipAmountPerPerson;
    setTotal(totalAmountPerPerson);
  };
  return (
    <div className="w-[680px] h-[320px] bg-customCyan-50 rounded-xl shadow-xl p-5 flex gap-9">
      {/* left section */}
      <div className="w-1/2 flex flex-col gap-6 py-2 pl-4">
        <Input label="Bill" icon={dollarIcon} />

        <div className="flex flex-col gap-2">
          <p className="text-xs">Select tip %</p>
          <div className="grid grid-cols-3 gap-2">
            {tipOptions.map((option) => (
              <TipButton tip={option} />
            ))}
          </div>
        </div>

        <Input label="Number of People" icon={userIcon} />
      </div>

      {/* right section */}
      <div className="w-1/2 h-full bg-customCyan-500 rounded-xl px-8 py-6 flex flex-col">
        <div className="flex flex-col gap-8 mt-3">
          <ResultItem label="Tip Amount" amount="5" />
          <ResultItem label="Total" amount="50" />
        </div>
        <button className="bg-customCyan-600 text-customCyan-500 w-full mt-auto py-1.5 font-bold rounded-md">
          RESET
        </button>
      </div>
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

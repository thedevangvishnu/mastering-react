import { useState } from "react";
import Input from "./components/Input";
import userIcon from "./assets/images/icon-person.svg";

const App = () => {
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
    <div className="font-display flex flex-col gap-2 w-1/2 mx-auto py-3 items-center">
      <Input label="name" icon={userIcon} />
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
    </div>
  );
};

export default App;

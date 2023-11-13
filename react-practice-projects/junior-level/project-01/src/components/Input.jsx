import { useState } from "react";

const Input = ({ label, icon, error }) => {
  const [value, setValue] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    if (value < 0) {
      setErrorMsg(error);
    } else {
      setValue(e.target.value);
    }
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <label>{label}</label>
      <div className="flex px-2 py-1 bg-customCyan-100 rounded-md">
        <div className="w-4 flex items-center justify-center">
          <img src={icon} alt={`Icon of ${icon}`} />
        </div>
        <input
          className="bg-transparent text-right w-full"
          type="number"
          value={value}
          onChange={handleChange}
        />
      </div>
      <p>{errorMsg}</p>
    </div>
  );
};

export default Input;

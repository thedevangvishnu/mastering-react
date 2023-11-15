import { useState, useEffect } from "react";

const Input = ({ label, icon, inputValue, onInputChange, errorMsg }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (inputValue === 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [inputValue]);

  const handleChange = (event) => {
    if (inputValue === 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }

    onInputChange(event);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="text-xs">
        {label}
        {hasError && <span className="text-red-600 ml-16 ">{errorMsg}</span>}
      </p>
      <div
        className={`flex px-2 py-1 bg-customCyan-100 rounded-md ${
          hasError === true && label === "Number of People"
            ? "border-red-600 border-[1px] border-solid"
            : ""
        } `}
      >
        <div className="w-2 flex items-center justify-center">
          <img src={icon} alt={`Icon of ${icon}`} />
        </div>
        <input
          className="bg-transparent text-right w-full outline-none pr-2 appearance-none "
          type="number"
          value={inputValue}
          onChange={handleChange}
          min={0}
        />
      </div>
    </div>
  );
};

export default Input;

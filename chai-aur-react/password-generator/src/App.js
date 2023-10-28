import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";
import CheckboxInput from "./components/checkbox-input/checkbox-input.component";

function App() {
  const [length, setLength] = useState(8);
  const [numbersIncluded, setNumbersIncluded] = useState(false);
  const [charactersIncluded, setCharactersIncluded] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("COPY");

  const lengthChangeHandler = (event) => {
    setLength(event.target.value);
    setButtonText("COPY");
  };

  const numbersToggleHandler = (event) => {
    setNumbersIncluded((numIncluded) => !numIncluded);
    setButtonText("COPY");
  };

  const charactersChangeHandler = (event) => {
    setCharactersIncluded((charIncluded) => !charIncluded);
    setButtonText("COPY");
  };

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let passwordString = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersIncluded) string += "1234567890";
    if (charactersIncluded) string += "!#$%&()*+,-./:;<=>?@[]^_{|}~";

    for (let i = 1; i <= length; i++) {
      let charPosition = Math.floor(Math.random() * string.length + 1);
      passwordString += string.charAt(charPosition);
    }

    setPassword(passwordString);
  }, [length, numbersIncluded, charactersIncluded, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setButtonText("COPIED");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersIncluded, charactersIncluded, passwordGenerator]);

  return (
    <div className="app__container">
      <h2 className="header">Password generator</h2>
      <div className="password__container">
        <input
          className="password__input"
          type="text"
          value={password}
          readOnly
        />

        <button className="copy__btn" onClick={copyPasswordToClipboard}>
          {buttonText}
        </button>
      </div>

      <div className="length__container">
        <input
          type="range"
          min={8}
          max={50}
          value={length}
          onChange={lengthChangeHandler}
        />
        <label>Length: {length}</label>
      </div>

      <div className="checkboxes__container">
        <CheckboxInput
          id="numbers"
          value={numbersIncluded}
          onChange={numbersToggleHandler}
          label="Numbers"
          htmlFor="numbers"
        />

        <CheckboxInput
          id="characters"
          type="checkbox"
          value={charactersIncluded}
          onChange={charactersChangeHandler}
          label="Characters"
          htmlFor="characters"
        />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersIncluded, setNumbersIncluded] = useState(false);
  const [charactersIncluded, setCharactersIncluded] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("COPY");

  const lengthChangeHandler = (event) => {
    setLength(event.target.value);
  };

  const numbersToggleHandler = (event) => {
    setNumbersIncluded((numIncluded) => !numIncluded);
  };

  const charactersChangeHandler = (event) => {
    setCharactersIncluded((charIncluded) => !charIncluded);
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
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersIncluded, charactersIncluded, passwordGenerator]);

  return (
    <div className="App">
      <h2>Password generator</h2>
      <input type="text" value={password} readOnly />

      <button onClick={copyPasswordToClipboard}>{buttonText}</button>
      <br />

      <input
        type="range"
        min={8}
        max={50}
        value={length}
        onChange={lengthChangeHandler}
      />
      <label htmlFor="">Length: {length}</label>
      <br />

      <input
        id="numbers"
        type="checkbox"
        value={numbersIncluded}
        onChange={numbersToggleHandler}
      />
      <label htmlFor="numbers">Numbers</label>
      <br />

      <input
        id="characters"
        type="checkbox"
        value={charactersIncluded}
        onChange={charactersChangeHandler}
      />
      <label htmlFor="characters">Characters</label>
    </div>
  );
}

export default App;

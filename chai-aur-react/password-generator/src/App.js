import "./App.css";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersIncluded, setNumbersIncluded] = useState(false);
  const [charactersIncluded, setCharactersIncluded] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h2>Password generator</h2>
      <input type="text" value={password} />
      <button>Copy</button>
      <br />
      <input type="range" min={8} max={50} value={length} />
      <label htmlFor="">Length: {length}</label>
      <br />
      <input id="numbers" type="checkbox" value={numbersIncluded} />
      <label htmlFor="numbers">Numbers</label>
      <br />
      <input id="characters" type="checkbox" value={charactersIncluded} />
      <label htmlFor="characters">Characters</label>
    </div>
  );
}

export default App;

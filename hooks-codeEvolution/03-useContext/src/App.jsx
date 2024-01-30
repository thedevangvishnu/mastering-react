import { useContext } from "react";
import "./App.css";
import Form from "./components/Form";
import { ThemeContext } from "./contexts/Theme.context";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setTheme(e.target.checked ? "light" : "dark");
  };
  return (
    <>
      <Form />

      {/* Theme switcher input */}
      <div className="checkbox">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={handleChange}
          id="check"
        />
        <label htmlFor="check">Use light mode</label>
      </div>
    </>
  );
}

export default App;

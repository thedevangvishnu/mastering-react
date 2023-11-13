import logo from "./assets/images/logo.svg";
import TipCalculator from "./components/TipCalculator";

const App = () => {
  return (
    <div className="font-display w-full h-screen bg-customCyan-200 flex flex-col items-center justify-center gap-6">
      <img src={logo} alt="App logo" className="w-20" />
      <TipCalculator />
    </div>
  );
};

export default App;

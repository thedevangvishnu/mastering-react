import logo from "./assets/images/logo.svg";
import TipCalculator from "./components/TipCalculator";

const App = () => {
  return (
    <div className="font-display w-full h-screen bg-customCyan-200 flex flex-col items-center justify-center gap-12">
      <img src={logo} alt="App logo" className="w-16" />
      <TipCalculator />
    </div>
  );
};

export default App;

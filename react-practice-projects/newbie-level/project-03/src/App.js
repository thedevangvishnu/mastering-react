const App = () => {
  return (
    // background
    <div className="bg-slate-200 w-ful h-screen flex items-center justify-center">
      {/* container div */}
      <div className="w-1/3 h-3/5 bg-white rounded-2xl relative shadow-2xl flex">
        {/* left seciton */}
        <div className="w-1/2 h-full bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue rounded-2xl"></div>

        {/* right section */}
        <div></div>
      </div>
    </div>
  );
};

export default App;

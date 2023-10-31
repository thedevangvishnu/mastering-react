import { ReactComponent as BgHeader } from "./assets/images/bg-pattern-card.svg";

import profileImage from "./assets/images/image-victor.jpg";

const App = () => {
  return (
    <div className="bg-darkCyan h-screen w-full flex justify-center items-center">
      <div className="w-76 h-100% bg-slate-50 rounded-2xl flex flex-col items-center ">
        <div className="w-fit rounded-t-2xl overflow-hidden">
          <BgHeader className="w-full" />
        </div>
        <img
          className="w-28 -m-16 rounded-full border-4 border-solid border-slate-100"
          src={profileImage}
          alt="Victor profile"
        />
        <div className="mt-20 flex items-center gap-2">
          <h2 className="font-bold text-desaturatedBlue text-lg">
            Victor Crest
          </h2>
          <span className="text-grayishBlue">26</span>
        </div>
        <p className="text-grayishBlue text-sm mb-6">London</p>

        <div className="border-t-2 py-6 flex items-center justify-between w-full px-8">
          <div className="flex flex-col items-center">
            <p className="font-bold text-desaturatedBlue text-lg">80K</p>
            <p className="text-xs text-grayishBlue tracking-widest">
              Followers
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-desaturatedBlue text-lg">803K</p>
            <p className="text-xs text-grayishBlue tracking-widest">Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-desaturatedBlue text-lg">1.4k</p>
            <p className="text-xs text-grayishBlue tracking-widest">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

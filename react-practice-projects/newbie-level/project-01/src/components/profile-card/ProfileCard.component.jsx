import { ReactComponent as BgHeader } from "../../assets/images/bg-pattern-card.svg";

const ProfileCard = ({ profile }) => {
  const { profileImage, name, age, city, followers, likes, photos } = profile;
  return (
    <div className="xs:w-72 w-80 h-100% bg-slate-50 rounded-2xl flex flex-col items-center shadow-xl">
      <div className="w-fit rounded-t-2xl overflow-hidden">
        <BgHeader className="w-full" />
      </div>
      <img
        className="w-28 -m-16 rounded-full border-4 border-solid border-slate-100"
        src={profileImage}
        alt="Victor profile"
      />
      <div className="mt-20 flex items-center gap-2">
        <h2 className="font-bold text-desaturatedBlue text-lg">{name}</h2>
        <span className="text-grayishBlue">{age}</span>
      </div>
      <p className="text-grayishBlue text-sm mb-6">{city}</p>

      <div className="border-t-2 py-6 flex items-center justify-between w-full px-8">
        <div className="flex flex-col items-center">
          <p className="font-bold text-desaturatedBlue text-lg">{followers}</p>
          <p className="text-xs text-grayishBlue tracking-widest">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-desaturatedBlue text-lg">{likes}</p>
          <p className="text-xs text-grayishBlue tracking-widest">Likes</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-desaturatedBlue text-lg">{photos}</p>
          <p className="text-xs text-grayishBlue tracking-widest">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

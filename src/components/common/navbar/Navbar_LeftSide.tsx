import ticketIcon from "../../../assets/menuIcons/headset.svg";
import moonIcon from "../../../assets/menuIcons/moon.svg";
import alertIcon from "../../../assets/menuIcons/notification.svg";
import searchIcon from "../../../assets/menuIcons/search.svg";
import settingIcon from "../../../assets/menuIcons/settings.svg";
import switchIcon from "../../../assets/menuIcons/switch.svg";
import userAvater from "../../../assets/userAvater.png";

const Navbar_LeftSide = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="space-y-6">
        <img src={moonIcon} alt="moonIcon" />
        <img src={searchIcon} alt="searchIcon" />
        <img src={alertIcon} alt="alertIcon" />
        <img src={ticketIcon} alt="ticketIcon" />
      </div>
      <div className="space-y-6">
        <img src={settingIcon} alt="settingIcon" />
        <img
          className="w-5 h-5 rounded-full"
          src={userAvater}
          alt="userAvater"
        />
        <img src={switchIcon} alt="switchIcon" />
      </div>
    </div>
  );
};

export default Navbar_LeftSide;

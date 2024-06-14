// import images
import { useSelector } from "react-redux";
import logo from "../../../assets/logo.png";
import setupCurrencyIcon from "../../../assets/menuIcons/coins.svg";
import dashboardIcon from "../../../assets/menuIcons/rocket.svg";
import feeChargeIcon from "../../../assets/menuIcons/wallet.svg";
import userAvater from "../../../assets/userAvater.png";
import AdminNavlink from "./AdminNavlink";
import Navbar_LeftSide from "./Navbar_LeftSide";

// default menu list
const navMenuListDefault = [
  {
    id: 2,
    name: "Setup Currency",
    url: "/setup-currency",
    icon: setupCurrencyIcon,
  },
  {
    id: 3,
    name: "Fee & Charge",
    url: "/fee-charge",
    icon: feeChargeIcon,
  },
  {
    id: 4,
    name: "Coupons",
    url: "/coupons",
    icon: feeChargeIcon,
  },
];

const Navbar = () => {
  const navToggle = useSelector((state: any) => state.navigation);
  return (
    <>
      <nav
        className={`${navToggle?.isOpen ? "w-10" : "md:w-64 w-44"} bg-adminGray-300 min-h-screen transition-all duration-300 flex overflow-hidden`}
      >
        <div className="w-10 bg-[#313844] h-full flex justify-center py-7">
          <Navbar_LeftSide />
        </div>

        <div
          className={`flex-1 overflow-hidden transition-all duration-300 ${navToggle?.isOpen ? "w-0 p-0" : "w-auto md:p-4 p-1"}`}
        >
          {/* user part */}
          <div className="w-full flex flex-col justify-center items-center">
            <img className="md:w-[150px] w-[100px]" src={logo} alt="logo" />
            <div className="flex flex-col items-center pt-2">
              <img
                className="md:w-[60px] md:h-[60px] h-[40px] w-[40] rounded-full"
                src={userAvater}
                alt="userAvater"
              />
              <h3 className="pt-3 text-white font-[700] text-sm md:text-base">
                Sahariar Shouvo
              </h3>
              <p className="md:text-sm text-xs text-[#7B8291]">Super Admin</p>
            </div>
          </div>

          {/* menu part */}
          <ul className="pt-8 space-y-3 text-xs md:text-base">
            <li>
              <AdminNavlink url="/" icon={dashboardIcon} name="Dashboard" />
            </li>
            <p className="text-xs text-adminTextGray-200">--DEFAULT</p>
            {navMenuListDefault.map((menu) => (
              <li key={menu.id}>
                <AdminNavlink
                  url={menu.url}
                  icon={menu.icon}
                  name={menu.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

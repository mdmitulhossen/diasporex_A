import { useDispatch } from "react-redux";
import menuToggleIcon from "../../../assets/menuIcons/doubleArrow.svg";
import { toggleNavigation } from "../../../features/navigation/navigationSlice";

const Topbar = ({ children }: { children: string }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleNavigation());
  };

  return (
    <>
      <div className="bg-[#5A5278] h-[70px] w-full text-white lg:pl-5 lg:pr-7 px-2 font-[500] flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <button
            onClick={handleToggle}
            className="p-2 rounded-md bg-[#6F6593]"
          >
            <img
              className="w-4 h-4"
              src={menuToggleIcon}
              alt="menuToggleIcon"
            />
          </button>
          <div>
            <h1 className="font-[500] text-white">{children}</h1>
            <p className="font-[500] text-white text-[10px] hidden md:block">
              Welcome To DiasporeX Admin Panel
            </p>
          </div>
        </div>

        <p className="text-sm font-[700] text-white hidden md:block">
          Dashboard {">"} <span className="font-[400]">{children}</span>
        </p>
      </div>

      <div className="bg-[#5A5278] h-[44px] -mt-1 w-full text-white lg:pl-5 lg:pr-7 px-2"></div>
    </>
  );
};

export default Topbar;

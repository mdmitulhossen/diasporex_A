import { NavLink } from "react-router-dom";
import arrowIcon from "../../../assets/menuIcons/arrow.svg";

const AdminNavlink = ({
  url,
  icon,
  name,
}: {
  url: string;
  icon: string;
  name: string;
}) => {
  return (
    <NavLink to={url}>
      {({ isActive }) => (
        <div className="flex gap-3 group">
          <img
            className={
              isActive
                ? "hidden"
                : "group-hover:invert group-hover:brightness-0 duration-200 w-3 md:w-4"
            }
            src={icon}
            alt="dashboardIcon"
          />
          <img
            className={isActive ? "block w-3 md:w-4" : "hidden"}
            src={arrowIcon}
            alt="arrowIcon"
          />
          <span
            className={
              isActive
                ? "text-adminTextGray-100 font-[700]"
                : "text-adminTextGray-200 group-hover:font-[700] group-hover:text-adminTextGray-100 duration-200"
            }
          >
            {name}
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default AdminNavlink;

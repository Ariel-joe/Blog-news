import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { SearchArticles } from "./SearchArticles";
import { Link } from "react-router";

const TopBar = () => {
  return (
    <div className="topbar flex justify-between px-4 py-4 items-center border-b fixed w-4/5 bg-white">
      <SearchArticles />
      <div className="icons flex gap-4">
        <span className="notifications border rounded-full p-2 cursor-pointer hover:shadow-lg duration-150">
          <IoIosNotificationsOutline size={25} />
        </span>
        <span className="profile border rounded-full p-2 cursor-pointer hover:shadow-lg duration-150">
          <Link to={"/profile"}>
            <CiUser size={25} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export { TopBar };

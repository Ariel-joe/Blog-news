import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router";
import { useUserStore } from "../store/user-store";

const Topbar = () => {
  const [searchText, setsearchText] = useState("");
  const { isLoggedIn } = useUserStore();

  return (
    <>
      <div className="topbar flex justify-between px-4 py-4 items-center border-b fixed w-4/5 bg-white">
        <form>
          <input
            type="text"
            // value={searchText}
            // onChange={(e) => setsearchText(e.target.value)}
            placeholder="Search blogs..."
            className="border p-2 w-[300px]"
          />
        </form>

        <div className="icons flex gap-4">
          <span className="notifications border rounded-full p-2 cursor-pointer hover:shadow-lg duration-150">
            <IoIosNotificationsOutline size={25} />
          </span>

          {isLoggedIn && (
            <span className="profile border rounded-full p-2 cursor-pointer hover:shadow-lg duration-150">
              <Link to={"/profile"}>
                <CiUser size={25} />
              </Link>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export { Topbar };

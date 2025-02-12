import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useUserStore } from "../store/user-store";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useUserStore();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <header className="w-1/5 h-full overflow-hidden border-r">
      <nav>
        <div className="logo h-14 flex items-center justify-center">
          <h1 className="text-3xl font-bold">BLOG NEWS</h1>
        </div>
        <ul className="py-14 px-8 space-y-12">
          <div className="space-y-6">
            <li className="border px-2 py-2">
              <Link to={"/"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                Homepage
              </Link>
            </li>
            <li className="border px-2 py-2">
              <Link to={"/about"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                About
              </Link>
            </li>
            <li className="border px-2 py-2">
              <Link to={"/news"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                News
              </Link>
            </li>
            <li className="border px-2 py-2">
              <Link to={"/contact"} className="flex items-center gap-4 text-lg">
                <MdKeyboardDoubleArrowRight />
                Contact
              </Link>
            </li>

            {user?.role === "admin" && (
              <li className="border px-2 py-2">
                <Link to={"/users"} className="flex items-center gap-4 text-lg">
                  <MdKeyboardDoubleArrowRight />
                  Users
                </Link>
              </li>
            )}
          </div>

          <hr />

          <div className="space-y-6">
            {isLoggedIn ? (
              <li
                onClick={handleLogout}
                className="border px-2 py-2 bg-red-500 text-white cursor-pointer"
              >
                <button className="flex items-center gap-4 text-lg">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="border px-2 py-2">
                  <Link
                    to={"/login"}
                    className="flex items-center gap-4 text-lg"
                  >
                    Login
                  </Link>
                </li>
                <li className="border px-2 py-2">
                  <Link
                    to={"/signup"}
                    className="flex items-center gap-4 text-lg"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export { Header };

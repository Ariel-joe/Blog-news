import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-14">Welcome Back</h1>
      <form className="flex flex-col gap-6">
        <input
          type="text"
          className="p-2 border"
          placeholder="Enter username"
        />
        <input
          type="password"
          className="p-2 border"
          placeholder="Enter password"
        />

        <button type="submit" className="bg-black text-white p-2">
          Login
        </button>

        <span className="flex gap-2">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="flex items-center text-blue-700 hover:shadow-md duration-150"
          >
            Signup <GoArrowRight />
          </Link>
        </span>
      </form>
    </>
  );
};

export { Login };

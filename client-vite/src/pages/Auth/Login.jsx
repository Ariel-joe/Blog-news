import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = async (e) => {
    e.preventDefault()

    try {
      const formData = {
        username, password
      }

      const response = await fetch("")
    } catch (error) {
      
    }
  }

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-14">Welcome Back</h1>
      <form onSubmit={submithandler} className="flex flex-col gap-6">
        <input
          type="text"
          className="p-2 border"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="p-2 border"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="bg-black text-white p-2">
          Login
        </button>

        <span className="flex gap-2">
          Don't have an account?
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

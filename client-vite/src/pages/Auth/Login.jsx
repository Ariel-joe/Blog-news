import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        username,
        password,
      };

      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const promise = () =>
          new Promise((resolve) => setTimeout(() => resolve(), 2000));

        toast.promise(promise, {
          loading: "Loading...",
          success: (data) => {
            return " login successfully ";
          },
          error: "Error",
        });
      }
    } catch (error) {
      toast.error("failed! please try again!");
    }
  };

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

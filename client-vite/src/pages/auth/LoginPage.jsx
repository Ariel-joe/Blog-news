import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";
import { toast } from "sonner";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(response);

      if (response.ok) {
        // Login is successful
        toast.success("Login Successful");
      } else {
        // Login is not successful
        toast.error("Login Not Successful");
      }
    } catch (error) {}
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-14">Welcome Back</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="p-2 border"
          placeholder="Enter username"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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

export { LoginPage };

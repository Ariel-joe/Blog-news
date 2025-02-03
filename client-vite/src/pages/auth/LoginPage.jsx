import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useUserStore } from "../../store/user-store";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserStore();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username,
      password,
    };

    const loginSuccess = await login(formData);

    if (loginSuccess) {
      toast.success("Login Successful");
      navigate("/profile");
    } else {
      toast.error("There was a problem logging you in. Please try again.");
    }
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

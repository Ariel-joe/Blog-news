import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      email,
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("signup Successful");

        navigate("/login");
      } else {
        toast.error("something went wrong, please try again!");
      }
    } catch (error) {
      error.message;
      toast.error("something went wrong, please try again!");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-14">
        Create an Account
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border"
          placeholder="Enter Name"
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border"
          placeholder="Enter Phone"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border"
          placeholder="Enter Email"
        />

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
          Signup
        </button>

        <span className="flex gap-2">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="flex items-center text-blue-700 hover:shadow-md duration-150"
          >
            Login <GoArrowRight />
          </Link>
        </span>
      </form>
    </>
  );
};

export { Signup };

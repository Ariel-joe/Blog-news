import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Add a function that will handle the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      email,
      username,
      password,
    };

    try {
      // When the user submits the form, the details that they have entered on the form should be sent to the server as JSON
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // If the response from the server is ok, navigate the user to the login page and ask them to login
      if (response.ok) {
        toast.success("Signup successful. Please log in");
        navigate("/login");
      } else {
        // If the response is not okay, show them the error message
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      // If the response is not okay, show them the error message
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-14">
        Create an Account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className="p-2 border"
          placeholder="Enter Name"
        />

        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          className="p-2 border"
          placeholder="Enter Phone"
        />

        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="p-2 border"
          placeholder="Enter Email"
        />

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

export { SignupPage };

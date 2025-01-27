import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

const SignupPage = () => {
  // Add a function that will handle the form submission
  // When the user submits the form, the details that they have entered on the form should be sent to the server as JSON
  // If the response from the server is ok, navigate the user to the login page and ask them to login
  // If the response is not okay, show them the error message

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-14">
        Create an Account
      </h1>
      <form className="flex flex-col gap-6">
        <input type="text" className="p-2 border" placeholder="Enter Name" />

        <input type="text" className="p-2 border" placeholder="Enter Phone" />

        <input type="email" className="p-2 border" placeholder="Enter Email" />

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

import { useEffect } from "react";
import { useUserStore } from "../../store/user-store.js";
import { Outlet, useNavigate } from "react-router";

const AdminRoutesWrapper = () => {
  // getting the user data
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ user });

    if (user?.role !== "admin") {
      toast.error("you are not authorized to access the page");
      navigate("/");
      return;
    }
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export { AdminRoutesWrapper };

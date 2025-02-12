import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { toast } from "sonner";
import { useUserStore } from "../../store/user-store";

const AdminRoutesWrapper = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  // Get the user data
  useEffect(() => {
    console.log({ user });

    if (user?.role !== "admin") {
      toast.error("You are not authorized to access that page.");
      navigate("/");
      return;
    }
  }, []);

  return <Outlet />;
};

export { AdminRoutesWrapper };

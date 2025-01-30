import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { toast } from "sonner";
import { useUser } from "../../hooks/use-user";

const ProtectedRouteWrapper = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useUser();

  // Get the user data
  useEffect(() => {
    console.log({ isLoggedIn });
    console.log({ user });

    // TODO: Fix this
    if (!isLoggedIn) {
      toast.error("Please login to access that page");
      navigate("/login");
      return;
    }
  }, []);

  return <Outlet />;
};

export { ProtectedRouteWrapper };

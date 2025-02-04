import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useUserStore } from "../../store/user-store";

const ProtectedRouteWrapper = () => {
  const { isLoggedIn } = useUserStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error(" please log in to access the page");
      navigate("/login")
      return;
    }
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export { ProtectedRouteWrapper };

import { useEffect } from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  useEffect(() => {
    console.log("App rendered");
  }, []);

  return (
    <>
      <Toaster position="bottom-center" richColors />
      <Outlet />
    </>
  );
};

export { GlobalLayout };

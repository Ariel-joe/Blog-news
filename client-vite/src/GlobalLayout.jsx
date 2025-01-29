import { Outlet } from "react-router";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <Toaster position="bottom-center" richColors />
      <Outlet />
    </>
  );
};

export { GlobalLayout };

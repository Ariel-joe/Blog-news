import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <Toaster richColors />
      <Outlet />
    </>
  );
};

export { GlobalLayout };

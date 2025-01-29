import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const GlobalLayout = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Outlet />
    </>
  );
};

export { GlobalLayout };

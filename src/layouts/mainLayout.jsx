import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <div>
      <Toaster position="top-center" richColors />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

import React from "react";
import { Header } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div 
    style={{ overflow: "auto", height: "100vh" }}
    >
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export { MainLayout };

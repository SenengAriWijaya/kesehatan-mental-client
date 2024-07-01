import React from "react";
import SideBar from "../Menu/SideBar";
import Home from "../Main/Home";

const DashboardHome = () => {
  return (
    <>
      <div className=" h-screen">
        <SideBar />
        <Home />
      </div>
    </>
  );
};

export default DashboardHome;

import React from "react";
import SideBar from "../Menu/SideBar";
import LogData from "../Main/LogData";

const DashboardLogData = () => {
  return (
    <>
      <div className="h-screen">
        <SideBar />
        <LogData />
      </div>
    </>
  );
};

export default DashboardLogData

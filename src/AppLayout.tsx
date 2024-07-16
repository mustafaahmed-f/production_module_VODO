import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "vodo-react-components";
import { modulesArr } from "./lib/Services/Utils/sideBarModules";

const AppLayOut = () => {
  return (
    <div className="layout">
      <SideBar
        modules={modulesArr}
        subModules={[]}
        className={{ module: "hover:text-sideBar-toggle " }}
        sideBarStyle="h-screen  sm:w-full"
      />

      <div className="outlet-outer-wrapper">
        <div className="outlet-inner-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayOut;

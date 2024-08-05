import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { SideBar } from "vodo-react-components";
import { modulesArr } from "./lib/Services/Utils/sideBarModules";
import LoaderComponent from "./Components/LoaderComponent/LoaderComponent";

const AppLayOut = () => {
  const navigation = useNavigation();

  return (
    <div className="layout">
      <SideBar
        modules={modulesArr}
        subModules={[]}
        className={{ module: "hover:text-sideBar-toggle " }}
        sideBarStyle="h-screen  sm:w-full"
      />

      <div className="outlet-outer-wrapper font-ubuntu">
        {navigation.state === "loading" ? <LoaderComponent /> : <Outlet />}
      </div>
    </div>
  );
};

export default AppLayOut;

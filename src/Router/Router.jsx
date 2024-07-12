import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

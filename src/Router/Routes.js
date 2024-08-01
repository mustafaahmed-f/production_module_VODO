import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProductionOrder from "../Pages/ProductionOrder/ProductionOrder";
import { loader as ProductionOrderLoader } from "../Pages/ProductionOrder/ProductionOrder";
import AppLayOut from "../AppLayout";
import NewProductionOrder from "../Pages/NewProductionOrder/NewProductionOrder";
import NewProductionTemplate from "../Pages/NewProductionTemplate/NewProductionTemplate";
import ProductionTemplate from "../Pages/ProductionTemplate/ProductionTemplate";

import ViewOrder, {
  loader as ViewOrderLoader,
} from "../Pages/ViewOrder/ViewOrder";

import EditOrder from "../Pages/EditOrder/EditOrder";
import { loader as EditOrderLoader } from "../Pages/EditOrder/EditOrder";
import { loader as EditTemplateLoader } from "../Pages/EditTemplate/EditTemplate";
import DueBalance from "../Pages/DueBalance/DueBalance";
import { loader as DueBalanceLoader } from "../Pages/DueBalance/DueBalance";
import Login from "../Pages/Login/Login";
import AuthComponent from "../Components/AuthComponent/AuthComponent";
import NonAuthComponent from "../Components/NonAuthComponent/NonAuthComponent";
import EditTemplate from "../Pages/EditTemplate/EditTemplate";
import ViewTemplate, {
  loader as ViewTemplateLoader,
} from "../Pages/ViewTemplate/ViewTemplate";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: (
          <AuthComponent>
            <ProductionOrder />
          </AuthComponent>
        ),
        loader: ProductionOrderLoader,
      },
      {
        path: "/new_production_order",
        element: (
          <AuthComponent>
            <NewProductionOrder />
          </AuthComponent>
        ),
      },
      {
        path: "/new_production_template",
        element: (
          <AuthComponent>
            <NewProductionTemplate />
          </AuthComponent>
        ),
      },
      {
        path: "/production_template",
        element: (
          <AuthComponent>
            <ProductionTemplate />
          </AuthComponent>
        ),
      },
      {
        path: "/viewOrder/:id",
        element: (
          <AuthComponent>
            <ViewOrder />
          </AuthComponent>
        ),
        loader: ViewOrderLoader,
      },
      {
        path: "/viewTemplate/:id",
        element: (
          <AuthComponent>
            <ViewTemplate />
          </AuthComponent>
        ),
        loader: ViewTemplateLoader,
      },
      {
        path: "/editOrder/:id",
        element: (
          <AuthComponent>
            <EditOrder />
          </AuthComponent>
        ),
        loader: EditOrderLoader,
      },
      {
        path: "/editTemplate/:id",
        element: (
          <AuthComponent>
            <EditTemplate />
          </AuthComponent>
        ),
        loader: EditTemplateLoader,
      },
      {
        path: "/duebalance/:id",
        element: (
          <AuthComponent>
            <DueBalance />
          </AuthComponent>
        ),
        loader: DueBalanceLoader,
      },
      {
        path: "/login",
        element: (
          <NonAuthComponent>
            <Login />
          </NonAuthComponent>
        ),
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default router;

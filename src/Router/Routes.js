import { createBrowserRouter } from "react-router-dom";
import ProductionOrder from "../Pages/ProductionOrder/ProductionOrder";
import AppLayOut from "../AppLayout";
import NewProductionOrder from "../Pages/NewProductionOrder/NewProductionOrder";
import NewProductionTemplate from "../Pages/NewProductionTemplate/NewProductionTemplate";
import ProductionTemplate from "../Pages/ProductionTemplate/ProductionTemplate";

import ViewOrder, {
  loader as ViewOrderLoader,
} from "../Pages/ViewOrder/ViewOrder";

import EditOrder from "../Pages/EditOrder/EditOrder";
import { loader as EditOrderLoader } from "../Pages/EditOrder/EditOrder";
import DueBalance from "../Pages/DueBalance/DueBalance";
import { loader as DueBalanceLoader } from "../Pages/DueBalance/DueBalance";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <ProductionOrder />,
      },
      {
        path: "/new_production_order",
        element: <NewProductionOrder />,
      },
      {
        path: "/new_production_template",
        element: <NewProductionTemplate />,
      },
      {
        path: "/production_template",
        element: <ProductionTemplate />,
      },
      {
        path: "/view/:id",
        element: <ViewOrder />,
        loader: ViewOrderLoader,
      },
      {
        path: "/edit/:id",
        element: <EditOrder />,
        loader: EditOrderLoader,
      },
      {
        path: "/duebalance/:id",
        element: <DueBalance />,
        loader: DueBalanceLoader,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default router;

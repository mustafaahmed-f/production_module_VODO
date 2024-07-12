import React, { useState } from "react";
import OrderHeading from "./OrderHeading";
import FilterOrders from "./FilterOrders";
import OrdersViewedNum from "./OrdersViewedNum";
import OrdersPagination from "./OrdersPagination";
import OrdersTable from "./OrdersTable";

function ProductionOrder() {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="min-w-fit">
      <OrderHeading />
      <FilterOrders />
      <OrdersTable />
      <div className="flex items-center justify-between">
        <OrdersViewedNum />
        <OrdersPagination />
      </div>
    </div>
  );
}

export default ProductionOrder;

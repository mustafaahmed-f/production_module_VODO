import React, { useRef, useState } from "react";
import OrderHeading from "./OrderHeading";
import FilterOrders from "./FilterOrders";
import OrdersViewedNum from "./OrdersViewedNum";
import OrdersPagination from "./OrdersPagination";
import OrdersTable from "./OrdersTable";

function ProductionOrder() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const isInitialRender = useRef<boolean>(true);
  return (
    <>
      <OrderHeading
        setOpenFilter={() => {
          setOpenFilter(!openFilter);
          isInitialRender.current = false;
        }}
      />
      <div
        className={`overflow-hidden transition-all ${
          openFilter
            ? "max-h-[500px] animate-showFilter"
            : `max-h-0 ${!isInitialRender.current && "animate-hideFilter"}`
        }`}
      >
        <FilterOrders />
      </div>
      <OrdersTable />
      <div className="flex items-center justify-between mt-1">
        <OrdersViewedNum />
        <OrdersPagination />
      </div>
    </>
  );
}

export default ProductionOrder;

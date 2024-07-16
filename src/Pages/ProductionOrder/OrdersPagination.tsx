import { PaginationComponent } from "vodo-react-components";
import React from "react";
function OrdersPagination() {
  return (
    <PaginationComponent
      setLimitFn={() => {}}
      setPageFn={() => {}}
      totalDataLength={2}
      constantLimit={2}
    />
  );
}

export default OrdersPagination;

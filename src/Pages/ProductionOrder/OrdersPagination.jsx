import { PaginationComponent } from "vodo-react-components";

function OrdersPagination() {
  return (
    <PaginationComponent
      setLimitFn={() => {}}
      setPageFn={() => {}}
      totalDataLength={2}
    />
  );
}

export default OrdersPagination;

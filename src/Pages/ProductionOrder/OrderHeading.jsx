import { Button } from "vodo-react-components";
import TableBtn from "../../Components/TableBtn/TableBtn";

function OrderHeading() {
  return (
    <div className="flex items-center justify-between px-2 py-2 text-xs border rounded-tl-sm rounded-tr-sm min-w-fit border-section-border sm:py-3 sm:px-4 bg-table-bg">
      <div className="flex items-center justify-start gap-1">
        <h3 className="px-4 py-2 text-2xl font-medium font-ubuntu">Production Orders</h3>
        <TableBtn className="px-2 text-sm py-[1px]" href={"/new_production_order"} >New Production Order</TableBtn>
      </div>
      <div>
        <Button variant="destructive" className="px-4 py-1 text-sm rounded-full">
          Filter
        </Button>
      </div>
    </div>
  );
}

export default OrderHeading;

import { Button } from "vodo-react-components";
import TableBtn from "../../Components/TableBtn/TableBtn";
import React from "react";
import Heading from "../../Components/Heading/Heading";

function OrderHeading({ setOpenFilter }: { setOpenFilter: () => void }) {
  return (
    <Heading
      newHref="/new_production_order"
      secondSection={
        <Button
          variant="destructive"
          className="px-4 py-1 text-sm rounded-full"
          onClick={setOpenFilter}
        >
          Filter
        </Button>
      }
      title="Production Orders"
    />
  );
}

export default OrderHeading;

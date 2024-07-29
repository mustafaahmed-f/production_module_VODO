import React from "react";
import { orderData } from "./orderDataType";
import ViewTable from "./ViewTable";

interface DetailsTableProps {
  data: orderData;
}

const DetailsTable: React.FC<DetailsTableProps> = ({ data }) => {
  const { BillOfMaterials, templateName } = data;
  return (
    <div className="flex flex-col gap-2">
      <p>{templateName}</p>
      <ViewTable BillOfMaterials={BillOfMaterials} data={data} />
    </div>
  );
};

export default DetailsTable;

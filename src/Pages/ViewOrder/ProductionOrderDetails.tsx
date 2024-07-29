import React from "react";
import DetailsHeader from "./DetailsHeader";
import DetailsData from "./DetailsData";
import DetailsTable from "./DetailsTable";
import DetailsFooter from "./DetailsFooter";
import { orderData } from "./orderDataType";

interface ProductionOrderDetailsProps {
  data: orderData;
}

const ProductionOrderDetails: React.FC<ProductionOrderDetailsProps> = ({
  data,
}) => {
  return (
    <div className="mt-10">
      <DetailsHeader />
      <div className="flex flex-col gap-2">
        <DetailsData data={data} />
        <DetailsTable data={data} />
        <DetailsFooter data={data} />
      </div>
    </div>
  );
};

export default ProductionOrderDetails;

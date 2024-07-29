import React from "react";
import DetailsHeader from "./DetailsHeader";
import DetailsData from "./DetailsData";
import DetailsTable from "./DetailsTable";
import DetailsFooter from "./DetailsFooter";

interface ProductionOrderDetailsProps {}

const ProductionOrderDetails: React.FC<ProductionOrderDetailsProps> = ({}) => {
  return (
    <div className="mt-10">
      <DetailsHeader />
      <DetailsData />
      <DetailsTable />
      <DetailsFooter />
    </div>
  );
};

export default ProductionOrderDetails;

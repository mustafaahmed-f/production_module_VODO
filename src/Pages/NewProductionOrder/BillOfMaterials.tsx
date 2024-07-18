import { FormikContextType } from "formik";
import React from "react";
import { NewProductionOrderType } from "./NewProductionOrder.types";

interface BillOfMaterialsProps {
  formik: FormikContextType<NewProductionOrderType>;
}

const BillOfMaterials: React.FC<BillOfMaterialsProps> = ({ formik }) => {
  return (
    <div className="flex flex-col w-full gap-6 mt-3 sm:gap-8 sm:mt-4">
      <label className="font-medium text-labelSize">Bill Of Materials</label>
      <div className="px-2 py-3 rounded-md sm:px-3 sm:py-4 bg-BillOfMaterials-bg"></div>
    </div>
  );
};

export default BillOfMaterials;

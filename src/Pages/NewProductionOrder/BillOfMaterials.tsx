import { FormikContextType } from "formik";
import React from "react";
import { NewProductionOrderType } from "./NewProductionOrder.types";
import { MainTabel } from "vodo-react-components";
import { tableHead } from "./BillOfMaterialsTable";

interface BillOfMaterialsProps {
  formik: FormikContextType<NewProductionOrderType>;
}

const BillOfMaterials: React.FC<BillOfMaterialsProps> = ({ formik }) => {
  return (
    <div className="flex flex-col w-full gap-4 mt-3 sm:gap-5 sm:mt-4 ">
      <label className="font-medium text-labelSize">Bill Of Materials</label>
      <div className="px-2 py-3 overflow-x-scroll border rounded-md tableContainer sm:px-3 sm:py-4 bg-BillOfMaterials-bg border-section-border">
        <div className="w-full sm:w-1/2 min-w-fit billOfMaterials">
          <MainTabel
            TabelData={formik.values.BillOfMaterial}
            TabelHead={tableHead}
            tableStyling={{
              headElementStyle: "text-start bg-transparent ",
              bodyElementStyle: {
                general: "bg-transparent border-none",
                text: "justify-start flex-row",
              },
              outerStyle: "shadow-none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BillOfMaterials;

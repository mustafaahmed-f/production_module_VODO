import React from "react";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";
import { FormikContextType } from "formik";
import { tableHead } from "../NewProductionOrder/BillOfMaterialsTable";
import { MainTabel } from "vodo-react-components";

interface BillOfMaterialsProps {
  formik: FormikContextType<NewProductionTemplateType>;
}
const BillOfMaterials: React.FC<BillOfMaterialsProps> = ({ formik }) => {
  return (
    <div className="flex flex-col w-full gap-4 mt-3 sm:gap-5 sm:mt-4 ">
      <label className="font-medium text-labelSize">Bill Of Materials</label>
      <div className="px-2 py-3 border rounded-md sm:px-3 sm:py-4 bg-BillOfMaterials-bg border-section-border">
        <div className="w-1/2 billOfMaterials">
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

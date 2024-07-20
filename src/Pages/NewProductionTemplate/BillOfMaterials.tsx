import React from "react";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";
import { FormikContextType } from "formik";
import { tableHead } from "./billOfMaterialsTable";
import { Button, DropDown, MainTabel } from "vodo-react-components";

import useDataArr from "../../Hooks/NewProductTemplate/useDataArr";
import { ArrowDownIcon } from "vodo-icons";
import { addLines } from "./addLinesMethod";
import { dropDownSelections } from "./DropDownSelections";

interface BillOfMaterialsProps {
  formik: FormikContextType<NewProductionTemplateType>;
}
const BillOfMaterials: React.FC<BillOfMaterialsProps> = ({ formik }) => {
  const { dataArr } = useDataArr({ formik });
  const selections: any[] = dropDownSelections({ formik });
  return (
    <div className="flex flex-col w-full gap-4 mt-3 sm:gap-5 sm:mt-4 ">
      <label className="font-medium text-labelSize">Bill Of Materials</label>
      <div className="px-2 py-3 overflow-x-scroll border rounded-md tableContainer sm:px-3 sm:py-4 bg-BillOfMaterials-bg border-section-border">
        <div className="w-full sm:w-1/2 min-w-fit billOfMaterials">
          <MainTabel
            TabelData={dataArr}
            TabelHead={tableHead}
            tableStyling={{
              headElementStyle: "text-start bg-transparent px-4",
              bodyElementStyle: {
                general: "bg-transparent border-none",
                text: "justify-start flex-row",
              },
              outerStyle: "shadow-none",
            }}
          />
        </div>
        <div className="flex px-4 max-h-fit">
          {" "}
          <Button
            className="rounded-l-full h-[32px]"
            type="button"
            onClick={() => addLines({ formik })}
          >
            Add Line
          </Button>
          <DropDown
            mainIcon={<ArrowDownIcon />}
            selections={selections}
            outerClassName="h-full"
            className="text-white rounded-l-none rounded-r-full bg-sideBar-toggle hover:bg-sideBar-toggle hover:opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default BillOfMaterials;

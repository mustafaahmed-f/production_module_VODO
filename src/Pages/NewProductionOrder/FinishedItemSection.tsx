import { FormikContextType } from "formik";
import React from "react";
import { NewProductionOrderType } from "./NewProductionOrder.types";
import InputField from "../../Components/InputField/InputField";

interface FinishedItemSectionProps {
  formik: FormikContextType<NewProductionOrderType>;
}

const FinishedItemSection: React.FC<FinishedItemSectionProps> = ({
  formik,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-labelSize">Finished Item</label>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-finishedItem sm:gap-3">
        <InputField<NewProductionOrderType>
          formik={formik}
          field={"finishedItem"}
          name="finishedItem"
          className="inputField"
          id="finishedItem"
        />
        <InputField<NewProductionOrderType>
          formik={formik}
          field={"itemName"}
          name="itemName"
          id="itemName"
          disabled
          className="inputField bg-Disabled-input-SUB disabled:text-black disabled:opacity-100"
        />
      </div>
    </div>
  );
};

export default FinishedItemSection;

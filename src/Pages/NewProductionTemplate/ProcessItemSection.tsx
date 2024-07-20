import { FormikContextType } from "formik";
import React from "react";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";
import InputField from "../../Components/InputField/InputField";
import DataSwitcher from "../../Components/Switcher/DataSwitcher";

interface ProcessItemProps {
  formik: FormikContextType<NewProductionTemplateType>;
}

const ProcessItemSection: React.FC<ProcessItemProps> = ({ formik }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-finishedItem sm:gap-3">
        <InputField<NewProductionTemplateType>
          formik={formik}
          field={"ItemQty"}
          name="ItemQty"
          className="inputField"
          id="ItemQty"
          label="Process item"
          labelStyle="inputFieldLabel mb-1"
        />
        <DataSwitcher<NewProductionTemplateType>
          formik={formik}
          field="itemName"
          formikField={"itemName"}
          items={["Item 1", "Item 2"]}
        />
      </div>
    </div>
  );
};

export default ProcessItemSection;

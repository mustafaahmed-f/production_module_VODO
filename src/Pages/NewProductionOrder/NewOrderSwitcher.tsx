import { FormikContextType } from "formik";
import React from "react";
import { Switcher } from "vodo-react-components";
import { NewProductionOrderType } from "./NewProductionOrder.types";
import { cn } from "../../lib/Services/Utils/utils";

interface NewOrderSwitcherProps {
  formik: FormikContextType<NewProductionOrderType>;
  field: string;
  items: any[];
  targetKey?: string;
}

const NewOrderSwitcher: React.FC<NewOrderSwitcherProps> = ({
  formik,
  field,
  items,
  targetKey,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={field} className="font-medium text-labelSize">
        {field}
      </label>
      <Switcher
        items={items}
        setSelectedOption={(e) => {
          formik.setFieldValue(`${field}`, e);
        }}
        placeHolder="Select"
        className="text-black switcher"
        id={field}
        targetKey={targetKey}
      />
    </div>
  );
};

export default NewOrderSwitcher;

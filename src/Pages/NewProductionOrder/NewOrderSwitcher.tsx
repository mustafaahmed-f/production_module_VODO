import { FormikContextType, FormikErrors } from "formik";
import React from "react";
import { Switcher } from "vodo-react-components";
import { NewProductionOrderType } from "./NewProductionOrder.types";

interface NewOrderSwitcherProps {
  formik: FormikContextType<NewProductionOrderType>;
  field: string;
  items: any[];
  targetKey?: string;
  formikField?: string;
  getOption?: (e: any) => void;
}

const NewOrderSwitcher: React.FC<NewOrderSwitcherProps> = ({
  formik,
  field,
  items,
  targetKey,
  getOption,
  formikField,
}) => {
  return (
    <div className="flex flex-col sm:gap-1">
      <label htmlFor={field} className="font-medium text-labelSize">
        {field}
      </label>
      <Switcher
        items={items}
        setSelectedOption={(e: any) => {
          formik.setFieldValue(`${formikField}`, targetKey ? e[targetKey] : e);
          getOption && getOption(e);
        }}
        placeHolder="Select"
        className="mt-0 text-black switcher"
        id={field}
        targetKey={targetKey ?? ""}
      />
      {formik.errors[
        formikField as keyof FormikErrors<NewProductionOrderType>
      ] &&
        formik.touched[
          formikField as keyof FormikErrors<NewProductionOrderType>
        ] && (
          <p className="text-red-600 ">
            {
              formik.errors[
                formikField as keyof FormikErrors<NewProductionOrderType>
              ] as string
            }
          </p>
        )}
    </div>
  );
};

export default NewOrderSwitcher;

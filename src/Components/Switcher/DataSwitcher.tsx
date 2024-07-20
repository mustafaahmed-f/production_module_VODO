import { FormikContextType, FormikErrors } from "formik";
import React from "react";
import { Switcher } from "vodo-react-components";
import { cn } from "../../lib/Services/Utils/utils";
// import { NewProductionOrderType } from "./NewProductionOrder.types";

interface DataSwitcherProps<T> {
  formik: FormikContextType<T>;
  field?: string;
  items: any[];
  targetKey?: string;
  formikField?: string;
  className?: string;
  getOption?: (e: any) => void;
  currentValue?: string;
}

function DataSwitcher<T>({
  formik,
  field,
  items,
  targetKey,
  getOption,
  formikField,
  className = "",
  currentValue,
}: DataSwitcherProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        {field && (
          <label htmlFor={field} className="font-medium text-labelSize">
            {field}
          </label>
        )}
        <Switcher
          items={items}
          setSelectedOption={(e: any) => {
            formik.setFieldValue(
              `${formikField}`,
              targetKey ? e[targetKey] : e
            );
            getOption && getOption(e);
          }}
          placeHolder="Select"
          className={cn("mt-0 text-black switcher", className)}
          id={field}
          targetKey={targetKey ?? ""}
          currentValue={currentValue}
        />
      </div>
      {formik.errors[formikField as keyof FormikErrors<T>] &&
        formik.touched[formikField as keyof FormikErrors<T>] && (
          <p className="text-red-600 ">
            {formik.errors[formikField as keyof FormikErrors<T>] as string}
          </p>
        )}
    </div>
  );
}

export default DataSwitcher;

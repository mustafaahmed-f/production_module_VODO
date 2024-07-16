import React from "react";
import { cn } from "../../lib/Services/Utils/utils";
import { UserInput } from "vodo-react-components";
import { FormikContextType } from "formik";
import { filterOptions } from "../../Pages/ProductionOrder/FilterOrders.types";

interface inputFieldProps {
  field: string;
  formik: FormikContextType<filterOptions>;
  className?: string;
  label: string;
}

function InputField({ field, formik, className = "", label }: inputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <UserInput
        id={field}
        label={label}
        type="text"
        name={field}
        value={formik.values[field as keyof filterOptions]}
        onChangeFn={formik.handleChange}
        onBlur={formik.handleBlur}
        className={cn(
          ` ${
            formik.errors[field as keyof filterOptions] &&
            formik.touched[field as keyof filterOptions]
              ? "border border-red-600"
              : ""
          }`,
          className
        )}
      />
      {formik.errors[field as keyof filterOptions] &&
        formik.touched[field as keyof filterOptions] && (
          <p className="text-red-600 ">
            {formik.errors[field as keyof filterOptions]}
          </p>
        )}
    </div>
  );
}

export default InputField;

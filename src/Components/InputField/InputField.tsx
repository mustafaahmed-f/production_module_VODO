import React, { HTMLInputTypeAttribute } from "react";
import { cn } from "../../lib/Services/Utils/utils";
import { UserInput } from "vodo-react-components";
import { FormikContextType } from "formik";
import { get } from "lodash";

interface inputFieldProps<T>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  field: string;
  formik: FormikContextType<T>;
  className?: string;
  label?: string;
  placeholder?: string;
  labelStyle?: string;
}

function InputField<T>({
  field,
  formik,
  className = "",
  label,
  placeholder,
  labelStyle,
  ...props
}: inputFieldProps<T>) {
  const error = get(formik.errors, field, "");
  const touched = get(formik.touched, field, "");
  return (
    <div className="flex flex-col flex-grow gap-1">
      <UserInput
        id={field}
        label={label}
        placeholder={placeholder}
        closeBtnFn={() => formik.setFieldValue(field, "")}
        type="text"
        labelStyle={labelStyle}
        name={field}
        value={formik.values[field as keyof T] as string}
        onChangeFn={formik.handleChange}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={cn(
          ` ${
            formik.errors[field as keyof T] && formik.touched[field as keyof T]
              ? "border border-red-600"
              : ""
          }`,
          className
        )}
        {...props}
      />
      {error && touched && <p className="text-red-600 ">{error as string}</p>}
    </div>
  );
}

export default InputField;

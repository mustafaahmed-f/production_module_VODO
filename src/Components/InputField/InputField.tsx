import React, { HTMLInputTypeAttribute } from "react";
import { cn } from "../../lib/Services/Utils/utils";
import { UserInput } from "vodo-react-components";
import { FormikContextType } from "formik";

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
      {formik.errors[field as keyof T] && formik.touched[field as keyof T] && (
        <p className="text-red-600 ">
          {formik.errors[field as keyof T] as string}
        </p>
      )}
    </div>
  );
}

export default InputField;

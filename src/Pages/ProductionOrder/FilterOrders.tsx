import { FormikContextType, useFormik } from "formik";
import React from "react";
import { orderFilterSchema } from "../../lib/Services/Validations/orderFilterValidation";
import { filterOptions } from "./FilterOrders.types";
import InputField from "../../Components/InputField/InputField";
import { Switcher } from "vodo-react-components";
import DatePicker from "../../Components/DatePicker/DatePicker";
import FilterBtns from "./FilterBtns";

const initialValues: any = {
  reference: "",
  templateReference: "",
  status: "",
  from: "",
  to: "",
};

function FilterOrders() {
  const formik: FormikContextType<filterOptions> = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: orderFilterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="border rounded-sm sm:space-y-0 space-y-4  border-main-shadow grid grid-cols-1 sm:grid-cols-[1fr_1fr] p-2 sm:gap-x-2 sm:gap-y-2"
    >
      <InputField
        formik={formik}
        label="Reference"
        field="reference"
        className="inputField"
      />
      <InputField
        formik={formik}
        label="Template Reference"
        field="templateReference"
        className="inputField"
      />
      <Switcher
        items={["new", "processing", "completed"]}
        setSelectedOption={(e) => {
          formik.setFieldValue("status", e);
        }}
        placeHolder="Set status"
        className="switcher"
      />
      <DatePicker
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.from}
        name="from"
        id="from"
      />
      <DatePicker
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.to}
        name="to"
        id="to"
      />
      <FilterBtns resetFn={() => formik.resetForm({ values: initialValues })} />
    </form>
  );
}

export default FilterOrders;

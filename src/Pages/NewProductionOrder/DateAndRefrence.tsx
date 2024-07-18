import { FormikContextType } from "formik";
import React from "react";
import DatePicker from "../../Components/DatePicker/DatePicker";
import { CheckIcon } from "vodo-icons";
import InputField from "../../Components/InputField/InputField";
import { NewProductionOrderType } from "./NewProductionOrder.types";

interface DateAndRefrenceProps<T> {
  formik: FormikContextType<T>;
}

const DateAndRefrence: React.FC<DateAndRefrenceProps<any>> = ({ formik }) => {
  return (
    <div className="w-full gap-2 grid grid-cols-[auto] sm:grid-cols-dateAndRefrece">
      <div className="flex flex-col flex-grow">
        <label htmlFor="IssueDate" className="font-medium text-labelSize">
          Issue Date
        </label>
        <DatePicker
          name="IssueDate"
          id="IssueDate"
          value={formik.values.IssueDate}
          readOnly
          className="px-3 py-1 text-black rounded-full outline-none bg-Disabled-input"
        />
      </div>
      <div className="flex-grow sm:min-w-28">
        <div className="flex flex-nowrap">
          <InputField<NewProductionOrderType>
            formik={formik}
            placeholder="Automatic"
            label="Reference"
            readOnly
            disabled
            field="Reference"
            className="flex-grow text-black bg-Disabled-input"
            labelStyle="text-black opacity-1 text-labelSize"
          />
        </div>
      </div>
    </div>
  );
};

export default DateAndRefrence;

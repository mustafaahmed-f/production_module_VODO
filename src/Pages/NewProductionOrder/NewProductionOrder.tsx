import { FormikContextType, useFormik } from "formik";
import React from "react";
import { NewProductionOrderType } from "./NewProductionOrder.types";
import { NewProductionOrderSchema } from "../../lib/Services/Validations/newProductionOrderValidation";
import DatePicker from "../../Components/DatePicker/DatePicker";
import { CheckIcon } from "vodo-icons";
import InputField from "../../Components/InputField/InputField";
import DateAndRefrence from "./DateAndRefrence";
import { Switcher } from "vodo-react-components";
import NewOrderSwitcher from "./NewOrderSwitcher";
import { templateData } from "./fakeTemplateData";
import FinishedItemSection from "./FinishedItemSection";
import BillOfMaterials from "./BillOfMaterials";

const today = new Date();

const initialValues = {
  IssueDate: today.toISOString().slice(0, 10),
  Reference: "",
  Description: "",
  Factory: "",
  TemplateProductionOrder: "",
  finishedItem: 0,
  itemName: "",
  BillOfMaterial: [
    {
      item: "",
      unit: "",
      Qty: 0,
    },
  ],
};

const NewProductionOrder: React.FC = () => {
  const formik: FormikContextType<NewProductionOrderType> = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: NewProductionOrderSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <>
      <h2 className="mb-1 text-2xl font-semibold">Production Order</h2>
      <hr />
      <div className="w-full py-6">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full gap-2 sm:gap-3"
        >
          <div className="flex flex-col w-full gap-2 sm:gap-3 sm:w-1/2">
            <DateAndRefrence formik={formik} />
            <InputField<NewProductionOrderType>
              formik={formik}
              placeholder="Optional"
              label="Description"
              field="Description"
              className="inputField"
              labelStyle="inputFieldLabel mb-1"
              autoComplete="off"
            />
            <NewOrderSwitcher
              formik={formik}
              field="Factory"
              items={["Factory1", "Factory2"]}
            />
            <NewOrderSwitcher
              formik={formik}
              field="Template Production Order "
              items={templateData}
              targetKey="templateName"
            />
            <FinishedItemSection formik={formik} />
          </div>
          <BillOfMaterials formik={formik} />
        </form>
      </div>
    </>
  );
};

export default NewProductionOrder;

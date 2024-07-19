import { useFormik } from "formik";
import React from "react";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";
import DateAndRefrence from "../../Components/DateAndRefrence/DateAndRefrence";
import InputField from "../../Components/InputField/InputField";
import DataSwitcher from "../../Components/Switcher/DataSwitcher";
import ProcessItemSection from "./ProcessItemSection";
import BillOfMaterials from "./BillOfMaterials";
import { Button } from "vodo-react-components";

const today = new Date();
const initialValues = {
  IssueDate: today.toISOString().slice(0, 10),
  Reference: "",
  Title: "",
  OrderType: "",
  ItemQty: 0,
  itemName: "",
  BillOfMaterial: [
    {
      item: "",
      unit: "",
      qty: 0,
    },
  ],
};

const NewProductionTemplate: React.FC = () => {
  const formik = useFormik<NewProductionTemplateType>({
    initialValues,
    onSubmit: (values) => {
      console.log("submitted");
      console.log(values);
    },
  });

  return (
    <>
      <h2 className="mb-1 text-2xl font-semibold">Template Production Order</h2>
      <hr />
      <div className="w-full py-6">
        <form className="formStyle" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col w-full gap-2 sm:gap-3 sm:w-1/2">
            <DateAndRefrence<NewProductionTemplateType>
              formik={formik}
              editableDate={true}
            />
            <InputField<NewProductionTemplateType>
              formik={formik}
              placeholder="Optional"
              name="Title"
              label="Title"
              field="Title"
              className="inputField"
              labelStyle="inputFieldLabel mb-2"
              autoComplete="off"
            />
            <DataSwitcher<NewProductionTemplateType>
              formik={formik}
              items={["Production", "Process"]}
              field="OrderType"
              formikField="OrderType"
            />
            <ProcessItemSection formik={formik} />
          </div>
          <BillOfMaterials formik={formik} />
          <hr className="my-4" />
          <div>
            <Button type="submit" className="rounded-full">
              Create
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewProductionTemplate;

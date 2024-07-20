import { useFormik } from "formik";
import React from "react";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";
import DateAndRefrence from "../../Components/DateAndRefrence/DateAndRefrence";
import InputField from "../../Components/InputField/InputField";
import DataSwitcher from "../../Components/Switcher/DataSwitcher";
import ProcessItemSection from "./ProcessItemSection";
import BillOfMaterials from "./BillOfMaterials";
import { Button } from "vodo-react-components";
import { NewProductionTemplateSchema } from "../../lib/Services/Validations/newProductionTemplateValidation";

import { v4 as uuidv4 } from "uuid";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

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
      id: uuidv4(),
      item: "",
      unit: "",
      qty: "",
    },
  ],
};

const NewProductionTemplate: React.FC = () => {
  const formik = useFormik<NewProductionTemplateType>({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: NewProductionTemplateSchema,
    onSubmit: (values: NewProductionTemplateType) => {
      const submitValues = {
        ...values,
        BillOfMaterial: values.BillOfMaterial.map(({ id, ...rest }) => rest),
      };

      console.log("submitted");
      console.log(submitValues);
    },
  });

  return (
    <>
      <NavigationBar
        trialPage="New Production Template"
        trailLink={[
          { label: "Production Templates", href: "/production_template" },
        ]}
      />
      <div className="outlet-inner-wrapper">
        <h2 className="mb-1 text-2xl font-semibold">
          Template Production Order
        </h2>
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
                placeholder=""
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
              <Button
                type="submit"
                className="rounded-full"
                disabled={Object.keys(formik.errors).length > 0}
              >
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProductionTemplate;

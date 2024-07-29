import { Button } from "vodo-react-components";
import BillOfMaterials from "../../Pages/NewProductionTemplate/BillOfMaterials";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { NewProductionTemplateSchema } from "../../lib/Services/Validations/newProductionTemplateValidation";
import { NewProductionTemplateType } from "../../Pages/NewProductionTemplate/NewProductionTemplate.types";
import { useFormik } from "formik";
import DateAndRefrence from "../DateAndRefrence/DateAndRefrence";
import InputField from "../InputField/InputField";
import ProcessItemSection from "../../Pages/NewProductionTemplate/ProcessItemSection";
import DataSwitcher from "../Switcher/DataSwitcher";
import NavigationBar from "../NavigationBar/NavigationBar";

interface ProdutionTemplateLayoutProps {
  initialValuesObject?: NewProductionTemplateType;
  submitFn?: () => void;
}

const ProdutionTemplateLayout: React.FC<ProdutionTemplateLayoutProps> = ({
  initialValuesObject,
  submitFn,
}: ProdutionTemplateLayoutProps) => {
  const today = new Date();
  const initialValues = {
    IssueDate:
      initialValuesObject?.IssueDate || today.toISOString().slice(0, 10),
    Reference: initialValuesObject?.Reference || "",
    Title: initialValuesObject?.Title || "",
    OrderType: initialValuesObject?.OrderType || "",
    ItemQty: initialValuesObject?.ItemQty || 0,
    itemName: initialValuesObject?.itemName || "",
    BillOfMaterial: initialValuesObject?.BillOfMaterial ?? [
      {
        id: uuidv4(),
        item: "",
        unit: "",
        qty: "",
      },
    ],
  };

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
      submitFn?.();
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
                currentValue={formik.values.OrderType}
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
                {initialValuesObject ? "Update" : "Create"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProdutionTemplateLayout;

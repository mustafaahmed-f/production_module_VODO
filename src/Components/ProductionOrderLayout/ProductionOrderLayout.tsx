import React from "react";
import BtnsSection from "../../Pages/NewProductionOrder/BtnsSection";
import BillOfMaterials from "../../Pages/NewProductionOrder/BillOfMaterials";
import FinishedItemSection from "../../Pages/NewProductionOrder/FinishedItemSection";
import {
  TemplateData,
  templateData,
} from "../../Pages/NewProductionOrder/fakeTemplateData";
import DataSwitcher from "../Switcher/DataSwitcher";
import { NewProductionOrderType } from "../../Pages/NewProductionOrder/NewProductionOrder.types";
import DateAndRefrence from "../DateAndRefrence/DateAndRefrence";
import InputField from "../InputField/InputField";
import NavigationBar from "../NavigationBar/NavigationBar";
import { NewProductionOrderSchema } from "../../lib/Services/Validations/newProductionOrderValidation";
import { FormikContextType, useFormik } from "formik";

interface ProductionOrderLayoutProps {
  initialValuesObject?: NewProductionOrderType;
  submitFn?: () => void;
}

const ProductionOrderLayout: React.FC<ProductionOrderLayoutProps> = ({
  initialValuesObject,
  submitFn,
}) => {
  const today = new Date();

  const initialValues = {
    IssueDate:
      initialValuesObject?.IssueDate || today.toISOString().slice(0, 10),
    Reference: initialValuesObject?.Reference || "",
    Description: initialValuesObject?.Description || "",
    Factory: initialValuesObject?.Factory || "",
    TemplateProductionOrder: initialValuesObject?.TemplateProductionOrder || "",
    finishedItem: initialValuesObject?.finishedItem || 0,
    itemName: initialValuesObject?.itemName || "",
    BillOfMaterial: initialValuesObject?.BillOfMaterial ?? [
      {
        item: "",
        unit: "",
        qty: 0,
      },
    ],
  };
  const formik: FormikContextType<NewProductionOrderType> = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: NewProductionOrderSchema,
    onSubmit: (values) => {
      console.log("Submitted");
      console.log(values);
      submitFn?.();
    },
  });

  function addItemDetails(e: TemplateData) {
    let BillOfMaterialArr: any[] = [];

    e.billOfMaterials.map((item) =>
      BillOfMaterialArr.push({
        item: item.item,
        unit: item.unit,
        qty: item.qty,
      })
    );

    formik.setFieldValue("BillOfMaterial", BillOfMaterialArr);
    formik.setFieldValue("itemName", e.finishedItem.name);
    formik.setFieldValue("finishedItem", e.finishedItem.count);
  }

  return (
    <>
      <NavigationBar
        trialPage="New Production Order"
        trailLink={[{ label: "Production Orders", href: "/" }]}
      />
      <div className="outlet-inner-wrapper">
        <h2 className="mb-1 text-2xl font-semibold">Production Order</h2>
        <hr />
        <div className="w-full py-6">
          <form onSubmit={formik.handleSubmit} className="formStyle">
            <div className="flex flex-col w-full gap-2 sm:gap-3 sm:w-1/2">
              <DateAndRefrence<NewProductionOrderType> formik={formik} />
              <InputField<NewProductionOrderType>
                formik={formik}
                placeholder="Optional"
                name="Description"
                label="Description"
                field="Description"
                className="inputField"
                labelStyle="inputFieldLabel mb-1"
                autoComplete="off"
              />
              <DataSwitcher<NewProductionOrderType>
                formik={formik}
                field="Factory"
                formikField="Factory"
                items={["Factory1", "Factory2"]}
                currentValue={formik.values.Factory}
              />
              <DataSwitcher<NewProductionOrderType>
                formik={formik}
                field="Template Production Order "
                items={templateData}
                formikField="TemplateProductionOrder"
                targetKey="templateName"
                getOption={(e) => addItemDetails(e)}
                currentValue={formik.values.TemplateProductionOrder}
              />
              <FinishedItemSection formik={formik} />
            </div>
            <BillOfMaterials formik={formik} />
            <hr className="my-4" />
            <BtnsSection
              formik={formik}
              isEdit={initialValuesObject ? true : false}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductionOrderLayout;

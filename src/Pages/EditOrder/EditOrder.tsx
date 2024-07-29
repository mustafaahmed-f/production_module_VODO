import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductionOrderLayout from "../../Components/ProductionOrderLayout/ProductionOrderLayout";
import { NewProductionOrderType } from "../NewProductionOrder/NewProductionOrder.types";

function EditOrder() {
  const data = useLoaderData();
  return (
    <ProductionOrderLayout
      initialValuesObject={data as NewProductionOrderType}
    />
  );
}

export function loader({ params }: { params: any }) {
  const data: NewProductionOrderType = {
    IssueDate: "2024-06-10",
    Reference: "1",
    Description: "",
    finishedItem: 20,
    itemName: "Finished Item 1",
    TemplateProductionOrder: "Template 1",
    Factory: "Factory1",
    BillOfMaterial: [
      {
        item: "خام 1",
        unit: "Carton",
        qty: 20,
      },
    ],
  };
  return data;
}

export default EditOrder;

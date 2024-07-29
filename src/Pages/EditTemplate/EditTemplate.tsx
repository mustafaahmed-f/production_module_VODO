import React from "react";
import ProdutionTemplateLayout from "../../Components/ProductionTemplateLayout/ProductionTemplateLayout";
import { useLoaderData } from "react-router-dom";
import { NewProductionTemplateType } from "../NewProductionTemplate/NewProductionTemplate.types";
import { v4 as uuidv4 } from "uuid";

interface EditTemplateProps {}

const EditTemplate: React.FC<EditTemplateProps> = ({}) => {
  const data = useLoaderData();

  return (
    <ProdutionTemplateLayout
      initialValuesObject={data as NewProductionTemplateType}
    />
  );
};

export default EditTemplate;

export function loader({ params }: { params: any }) {
  let data: NewProductionTemplateType = {
    IssueDate: "2024-06-10",
    Reference: "1",
    Title: "test1",
    ItemQty: 20,
    OrderType: "Production",
    itemName: "item 1",
    BillOfMaterial: [
      {
        id: uuidv4(),
        item: "item 1",
        unit: "unit 1",
        qty: 10,
      },
      {
        id: uuidv4(),
        item: "item 3",
        unit: "unit 2",
        qty: 50,
      },
    ],
  };
  return data;
}

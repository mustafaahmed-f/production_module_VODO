import * as yup from "yup";

export const NewProductionOrderSchema = yup.object().shape({
  IssueDate: yup.date(),
  // Reference: yup.string().matches(/^[0-9]+$/, "Must be only digits"),
  Description: yup.string(),
  Factory: yup.string().required("Factory is required"),
  TemplateProductionOrder: yup.string().required(),
  finishedItem: yup.number(),
  itemName: yup.string(),
});

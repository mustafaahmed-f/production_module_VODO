import * as yup from "yup";

export const NewProductionOrderSchema = yup.object().shape({
  IssueDate: yup.date(),
  Reference: yup.string().matches(/^[0-9]+$/, "Must be only digits"),
  Description: yup.string().optional(),
  Factory: yup.string().required("Factory is required"),
  TemplateProductionOrder: yup.string().required("Template is required"),
  finishedItem: yup.number().required("Finished item is required"),
  itemName: yup.string().required("Item name is required"),
});

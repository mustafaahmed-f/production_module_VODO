import * as yup from "yup";

export const NewProductionOrderSchema = yup.object().shape({
  IssueDate: yup.date(),
  Reference: yup.string().matches(/^[0-9]+$/, "Must be only digits"),
  Description: yup.string(),
  Factory: yup.string(),
  TemplateProductionOrder: yup.string(),
  finishedItem: yup.number(),
});

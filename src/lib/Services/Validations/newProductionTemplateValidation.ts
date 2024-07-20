import * as yup from "yup";

export const NewProductionTemplateSchema = yup.object().shape({
  IssueDate: yup.date().required("Issue date is required !!"),
  Title: yup.string().required("Title is required !!"),
  OrderType: yup.string().required("Factory is required !!"),
  ItemQty: yup.number().required("Item quantity is required !!"),
  itemName: yup.string().required("Item name is required !!"),
  BillOfMaterial: yup.array().of(
    yup.object().shape({
      item: yup.string().required("Item is required !!"),
      unit: yup.string().required("Unit is required !!"),
      qty: yup
        .string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("Quantity is required !!"),
    })
  ),
});

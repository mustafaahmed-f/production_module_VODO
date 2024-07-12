import * as yup from "yup";

export const orderFilterSchema = yup.object().shape({
  reference: yup.string().matches(/^[0-9]+$/, "Must be only digits"),
  templateReference: yup.string().matches(/^[0-9]+$/, "Must be only digits"),
});

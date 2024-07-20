import { FormikContextType } from "formik";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";

export function removeLine({
  formik,
  id,
}: {
  formik: FormikContextType<NewProductionTemplateType>;
  id: string;
}) {
  formik.setFieldValue(
    "BillOfMaterial",
    formik.values.BillOfMaterial.filter((item) => item.id !== id)
  );
}

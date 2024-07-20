import { FormikContextType } from "formik";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";
import { v4 as uuidv4 } from "uuid";

export function addLines({
  formik,
  numOfLines = 1,
}: {
  formik: FormikContextType<NewProductionTemplateType>;
  numOfLines?: number;
}) {
  formik.setFieldValue("BillOfMaterial", [
    ...formik.values.BillOfMaterial,
    ...Array.from({ length: numOfLines }, (_, i) => {
      return {
        id: uuidv4(),
        item: "",
        unit: "",
        qty: "",
      };
    }),
  ]);
}

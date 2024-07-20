import { FormikContextType } from "formik";
import { NewProductionTemplateType } from "./NewProductionTemplate.types";
import { addLines } from "./addLinesMethod";

export function dropDownSelections({
  formik,
}: {
  formik: FormikContextType<NewProductionTemplateType>;
}) {
  return [
    {
      name: "Add line (5x)",
      action: () => {
        addLines({ formik, numOfLines: 5 });
      },
    },
    {
      name: "Add line (10x)",
      action: () => {
        addLines({ formik, numOfLines: 10 });
      },
    },
    {
      name: "Add line (20x)",
      action: () => {
        addLines({ formik, numOfLines: 20 });
      },
    },
  ];
}

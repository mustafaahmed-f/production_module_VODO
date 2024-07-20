import React from "react";
import { NewProductionTemplateType } from "../../Pages/NewProductionTemplate/NewProductionTemplate.types";
import { FormikContextType } from "formik";
import DataSwitcher from "../../Components/Switcher/DataSwitcher";
import InputField from "../../Components/InputField/InputField";
import { removeLine } from "../../Pages/NewProductionTemplate/removeLineMethod";

const useDataArr = ({ formik }) => {
  const dataArr = formik.values.BillOfMaterial.map((item, index) => {
    return {
      item: (
        <DataSwitcher
          key={`${item.id}-FirstSwitcher`}
          formikField={`BillOfMaterial[${index}].item`}
          items={["Item 1", "Item 2", "Item 3"]}
          formik={formik}
          getOption={(e) =>
            formik.setFieldValue(`BillOfMaterial[${index}].item`, e)
          }
          currentValue={item.item}
        />
      ),
      unit: (
        <DataSwitcher
          key={`${item.id}-SecondSwitcher`}
          formikField={`BillOfMaterial[${index}].unit`}
          items={["Unit 1", "Unit 2", "Unit 3"]}
          formik={formik}
          getOption={(e) =>
            formik.setFieldValue(`BillOfMaterial[${index}].unit`, e)
          }
          currentValue={item.unit}
        />
      ),
      qty: (
        <InputField
          key={`${item.id}-ThirdInput`}
          field={`BillOfMaterial[${index}].qty`}
          formik={formik}
          className="bg-white inputField min-w-32"
          labelStyle="inputFieldLabel mb-1"
          autoComplete="off"
          value={formik.values.BillOfMaterial[index].qty}
          onChange={(e) =>
            formik.setFieldValue(`BillOfMaterial[${index}].qty`, e.target.value)
          }
        />
      ),
      delete:
        formik.values.BillOfMaterial.length > 1 ? (
          <div
            key={`${item.id}-FourthDiv`}
            className="px-2 text-black bg-white border border-black cursor-pointer"
            onClick={() => removeLine({ formik, id: item.id })}
          >
            x
          </div>
        ) : (
          ""
        ),
    };
  });

  return { dataArr };
};

export default useDataArr;

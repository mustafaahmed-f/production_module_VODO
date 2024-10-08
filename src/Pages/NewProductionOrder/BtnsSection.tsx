import { FormikContextType } from "formik";
import React from "react";
import { Button } from "vodo-react-components";
import { NewProductionOrderType } from "./NewProductionOrder.types";

interface BtnsSectionProps {
  formik: FormikContextType<NewProductionOrderType>;
  isEdit: boolean;
}

const BtnsSection: React.FC<BtnsSectionProps> = ({ formik, isEdit }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-3 sm:gap-4 sm:flex-row">
      <Button
        type="submit"
        className="rounded-full"
        disabled={Object.keys(formik.errors).length > 0}
      >
        {isEdit ? "Update" : "Create"}
      </Button>
      {!isEdit && (
        <Button
          variant={"outline"}
          type="button"
          className="rounded-full"
          disabled={Object.keys(formik.errors).length > 0}
        >
          Create & Add another
        </Button>
      )}
    </div>
  );
};

export default BtnsSection;

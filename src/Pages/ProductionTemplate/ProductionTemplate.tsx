import React from "react";
import TemplateHeading from "./TemplateHeading";
import TemplateTable from "./TemplateTable";
import TemplateViewedNum from "./TemplateViewedNum";
import TemplatePagination from "./TemplatePagination";
const ProductionTemplate = () => {
  return (
    <>
      <TemplateHeading />
      <TemplateTable />
      <div className="flex items-center justify-between mt-1">
        <TemplateViewedNum />
        <TemplatePagination />
      </div>
    </>
  );
};

export default ProductionTemplate;

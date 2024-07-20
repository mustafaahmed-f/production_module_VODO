import React from "react";
import TemplateHeading from "./TemplateHeading";
import TemplateTable from "./TemplateTable";
import TemplateViewedNum from "./TemplateViewedNum";
import TemplatePagination from "./TemplatePagination";
const ProductionTemplate = () => {
  return (
    <div className="outlet-inner-wrapper">
      <TemplateHeading />
      <TemplateTable />
      <div className="flex items-center justify-between mt-1">
        <TemplateViewedNum />
        <TemplatePagination />
      </div>
    </div>
  );
};

export default ProductionTemplate;

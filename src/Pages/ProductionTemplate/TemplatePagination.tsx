import React from "react";
import { PaginationComponent } from "vodo-react-components";

interface TemplatePaginationProps {}

const TemplatePagination: React.FC<TemplatePaginationProps> = ({}) => {
  return (
    <PaginationComponent
      setLimitFn={() => {}}
      setPageFn={() => {}}
      totalDataLength={2}
      constantLimit={2}
    />
  );
};

export default TemplatePagination;

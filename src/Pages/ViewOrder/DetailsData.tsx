import React from "react";
import { orderData } from "./orderDataType";

interface DetailsDataProps {
  data: orderData;
}

const DetailsData: React.FC<DetailsDataProps> = ({ data }) => {
  const {
    Factory,
    Status,
    FinalProduct,
    FinalProductQuantity,
    IssueDate,
    Reference,
    CreatedBy,
    Address,
    VatNumber,
  } = data;
  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-col gap-1 font-medium">
        <p>{Factory}</p>
        <p>Status : {Status}</p>
        <p>Final Product : {FinalProduct}</p>
        <p>Quantity : {FinalProductQuantity}</p>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col gap-2 px-2 mt-3">
          <div className="flex flex-col gap-1">
            <p className="font-medium">Date</p>
            <p className="font-regular">{IssueDate}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Refernce</p>
            <p className="font-regular">{Reference}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Created By</p>
            <p className="font-regular">{CreatedBy}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-2 mt-3 border border-l-2 border-transparent border-l-black">
          <p className="text-wrap whitespace-break-spaces">
            Address : {Address}
          </p>
          <p>VAT Number : {VatNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsData;

import React from "react";
import { orderData } from "./orderDataType";

interface DetailsFooterProps {
  data: orderData;
}

const DetailsFooter: React.FC<DetailsFooterProps> = ({ data }) => {
  const { CreatedBy } = data;
  return (
    <div className="flex flex-wrap items-center justify-between mt-4">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-17px">Created By</p>
        <p className="text-[16px] font-regular">{CreatedBy}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-17px">Delivered To</p>
        <p className="text-[16px] font-regular"></p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-17px">Recevived By</p>
        <p className="text-[16px] font-regular"></p>
      </div>
    </div>
  );
};

export default DetailsFooter;

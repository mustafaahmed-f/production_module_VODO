import React from "react";
import { LogoIcon } from "vodo-icons";

interface DetailsHeaderProps {}

const DetailsHeader: React.FC<DetailsHeaderProps> = ({}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-medium">ProductionOrder</h2>
      <LogoIcon />
    </div>
  );
};

export default DetailsHeader;

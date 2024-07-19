import React from "react";
import { Button } from "vodo-react-components";

interface BtnsSectionProps {}

const BtnsSection: React.FC<BtnsSectionProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-start gap-3 sm:gap-4 sm:flex-row">
      <Button type="submit" className="rounded-full">
        Create
      </Button>
      <Button variant={"outline"} type="button" className="rounded-full">
        Create & Add another
      </Button>
    </div>
  );
};

export default BtnsSection;

import React from "react";
import { Button } from "vodo-react-components";
import { handleClone } from "./CloneFunction";
import { handlePrint } from "./PrintFunction";

interface ViewOrderHeaderProps {
  Reference: string;
}

const ViewOrderHeader: React.FC<ViewOrderHeaderProps> = ({ Reference }) => {
  return (
    <>
      <h2 className="mb-3 text-2xl text-black">Production Order-{Reference}</h2>
      <div className="flex items-center gap-2 sm:gap-3 ">
        <Button
          variant="outline"
          onClick={() => handleClone()}
          className="px-2 py-1 rounded-full hover:bg-sideBar-toggle hover:text-white"
        >
          Clone
        </Button>
        <Button
          variant="outline"
          onClick={() => handlePrint()}
          className="px-2 py-1 rounded-full hover:bg-sideBar-toggle hover:text-white"
        >
          Print
        </Button>
      </div>
    </>
  );
};

export default ViewOrderHeader;

import React from "react";
import { Button } from "vodo-react-components";

interface FilterBtnsProps {
  resetFn: () => void;
}

const FilterBtns: React.FC<FilterBtnsProps> = ({ resetFn }) => {
  return (
    <div className="flex items-center justify-end w-full gap-2">
      <Button type="submit" className="rounded-full">
        Submit
      </Button>
      <Button type="button" className="rounded-full" onClick={resetFn}>
        Reset
      </Button>
    </div>
  );
};

export default FilterBtns;

import React, { useState } from "react";
import Heading from "../../Components/Heading/Heading";
import { SearchInput } from "vodo-react-components";

interface TemplateHeadingProps {}

const TemplateHeading: React.FC<TemplateHeadingProps> = ({}) => {
  const [inputVal, setInputVal] = useState<string>("");
  return (
    <Heading
      newHref="/new_production_template"
      secondSection={
        <SearchInput setInputValue={(val) => setInputVal(val as string)} />
      }
      title="Production Orders Templates"
      className="bg-white border-none"
    />
  );
};

export default TemplateHeading;

import { Button } from "vodo-react-components";
import TableBtn from "../TableBtn/TableBtn";
import React, { ReactNode } from "react";
import { cn } from "../../lib/Services/Utils/utils";

interface headingProp {
  secondSection: ReactNode;
  newHref: string;
  title: string;
  className?: string;
}

function Heading({ secondSection, newHref, title, className }: headingProp) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-2 py-2 text-xs border rounded-tl-sm rounded-tr-sm min-w-fit border-section-border sm:py-3 sm:px-4 bg-table-bg",
        className
      )}
    >
      <div className="flex items-center justify-start gap-1">
        <h3 className="px-4 py-2 text-2xl font-medium font-ubuntu">{title}</h3>
        <TableBtn className="px-2 text-sm py-[1px]" href={newHref}>
          {"New" + title.substring(0, title.length - 1)}
        </TableBtn>
      </div>
      <div>{secondSection}</div>
    </div>
  );
}

export default Heading;

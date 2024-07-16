import React from "react";

import { Link } from "react-router-dom";

import { Button } from "vodo-react-components";
import { cn } from "../../lib/Services/Utils/utils";

interface tableBtnProps {
  children: React.ReactNode;
  className?: string;
  btnClassName?: string;
  href?: string;
}

function TableBtn({
  children,
  className = "",
  btnClassName,
  href = "",
}: tableBtnProps) {
  return !href ? (
    <Button className={cn(className, "text-white")}>{children}</Button>
  ) : (
    <Button className={btnClassName}>
      <Link to={href} className={className}>
        {children}
      </Link>
    </Button>
  );
}

export default TableBtn;

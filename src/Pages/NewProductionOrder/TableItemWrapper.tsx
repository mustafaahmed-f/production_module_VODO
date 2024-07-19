import React, { ReactNode } from "react";

interface TableItemWrapperProps {
  children: ReactNode;
}

const TableItemWrapper: React.FC<TableItemWrapperProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-start w-full bg-Disabled-input rounded-[2px] mb-1 me-1 px-1 py-0.5 border border-main-shadow">
      <p className="text-black text-[14px]">{children}</p>
    </div>
  );
};

export default TableItemWrapper;

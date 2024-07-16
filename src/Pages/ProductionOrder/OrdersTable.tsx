import { MainTabel } from "vodo-react-components";
import { TabelData, TabelHead } from "./tableFakeData.js";
import React from "react";
function OrdersTable() {
  return (
    <div className="overflow-x-scroll tableContainer">
      <MainTabel
        TabelHead={TabelHead}
        TabelData={TabelData}
        tableStyling={{
          bodyElementStyle: "border border-section-border text-tableData px-1",
          headElementStyle:
            "border border-section-border text-tableHead px-2 py-1",
        }}
      />
    </div>
  );
}

export default OrdersTable;

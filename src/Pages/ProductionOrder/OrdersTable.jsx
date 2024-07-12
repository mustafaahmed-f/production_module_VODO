import { MainTabel } from "vodo-react-components";
import { TabelData, TabelHead } from "./tableFakeData.js";

function OrdersTable() {
  return (
    <MainTabel
      TabelHead={TabelHead}
      TabelData={TabelData}
      tableStyling={{
        bodyElementStyle: "border border-section-border",
        headElementStyle: "border border-section-border",
      }}
    />
  );
}

export default OrdersTable;

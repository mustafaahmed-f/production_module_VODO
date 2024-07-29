import React from "react";
import { BillOfMaterialsItem, orderData } from "./orderDataType";

interface ViewTableProps {
  BillOfMaterials: BillOfMaterialsItem[];
  data: orderData;
}

const ViewTable: React.FC<ViewTableProps> = ({ BillOfMaterials, data }) => {
  const { TotalAverageCost, AverageUnitCostOfFinalProduct } = data;
  return (
    <table className="orderTable-Production-Module">
      <thead>
        <th className="px-2 py-1 font-medium">Item</th>
        <th className="px-2 py-1 font-medium">unit / qty</th>
        <th className="px-2 py-1 font-medium">average cost</th>
        <th className="px-2 py-1 font-medium">total cost</th>
      </thead>
      <tbody>
        {BillOfMaterials.map((item, i) => (
          <tr>
            <td className="px-2 py-1 font-regular">{item.item}</td>
            <td className="px-2 py-1 font-regular">{item["unit/qty"]}</td>
            <td className="px-2 py-1 font-regular">{item.AverageCost}</td>
            <td className="px-2 py-1 font-regular">{item.TotalCost}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={3} className="font-medium text-center">
            total average cost
          </td>
          <td className="px-2 py-1 font-regular">{TotalAverageCost}</td>
        </tr>
        <tr>
          <td colSpan={3} className="font-medium text-center">
            Average unit cost of the final product
          </td>
          <td className="px-2 py-1 font-regular">
            {AverageUnitCostOfFinalProduct}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ViewTable;

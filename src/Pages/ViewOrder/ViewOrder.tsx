import { useLoaderData } from "react-router-dom";
import React from "react";
function ViewOrder() {
  const data: any = useLoaderData();
  return <div>View</div>;
}

export function loader({ params }: { params: any }) {
  return {
    Reference: 1,
    IssueDate: "2024-06-24",
    CreatedBy: "asdfaae",
    Status: "New",
    FinalProduct: "Product 1",
    FinalProductQuantity: 50,
    Address: "3591 Al Khandaq, Al Yarmuk, 6450، Riyadh 13243",
    VatNumber: "5000000000000",
    BillOfMaterials: [
      {
        item: "raw 1",
        "unit/qty": 20,
        AverageCost: 9.5,
        TotalCost: 9.5 * 20,
      },
    ],
    TotalAverageCost: 9.5 * 20,
    AverageUnitCostOfFinalProduct: 19.5,
  };
}

export default ViewOrder;

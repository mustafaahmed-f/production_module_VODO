import { useLoaderData } from "react-router-dom";
import React from "react";
import ViewOrderHeader from "./ViewOrderHeader";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import ProductionOrderDetails from "./ProductionOrderDetails";
import { orderData } from "./orderDataType";
function ViewOrder() {
  const data: orderData = useLoaderData() as orderData;
  const { Reference } = data;
  return (
    <>
      <NavigationBar
        trialPage={`Production Order-${Reference} - View`}
        trailLink={[{ label: "Production Orders", href: "/" }]}
      />
      <div className="outlet-inner-wrapper">
        <ViewOrderHeader Reference={Reference} />
        <hr className="my-3" />
        <ProductionOrderDetails data={data} />
      </div>
    </>
  );
}

export function loader({ params }: { params: any }) {
  return {
    Reference: params.id,
    IssueDate: "2024-06-24",
    CreatedBy: "asdfaae",
    Status: "New",
    Factory: "مصنع جدة",
    FinalProduct: "Product 1",
    templateName: "test 1",
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

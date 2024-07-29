export interface BillOfMaterialsItem {
  item: string;
  "unit/qty": number;
  AverageCost: number;
  TotalCost: number;
}

export interface orderData {
  Reference: string;
  IssueDate: string;
  Factory: string;
  templateName: string;
  CreatedBy: string;
  Status: string;
  FinalProduct: string;
  FinalProductQuantity: number;
  Address: string;
  VatNumber: string;
  BillOfMaterials: BillOfMaterialsItem[];
  TotalAverageCost: number;
  AverageUnitCostOfFinalProduct: number;
}

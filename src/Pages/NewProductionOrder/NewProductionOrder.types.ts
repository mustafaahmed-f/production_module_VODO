export interface NewProductionOrderType {
  IssueDate: string;
  Reference: string;
  Description: string;
  Factory: string;
  TemplateProductionOrder: any;
  finishedItem: number;
  itemName: string;
  BillOfMaterial: billOfMaterialType[] | [];
}

export interface billOfMaterialType {
  item: string;
  unit: string;
  Qty: number;
}

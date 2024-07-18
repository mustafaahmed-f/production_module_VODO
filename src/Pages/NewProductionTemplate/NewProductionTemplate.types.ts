export interface NewProductionTemplateType {
  IssueDate: string;
  Reference: string;
  Title: string;
  OrderType: string;
  ItemQty: number;
  itemName: string;
  BillOfMaterial: billOfMaterialType[] | [];
}

export interface billOfMaterialType {
  item: string;
  unit: string;
  qty: number;
}

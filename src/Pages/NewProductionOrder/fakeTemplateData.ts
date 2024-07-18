export const templateData: TemplateData[] = [
  {
    id: 1,
    templateName: "Template 1",
    finishedItem: {
      count: 20,
      name: "تصنيع 1",
    },
    billOfMaterials: [
      {
        id: 1,
        item: "خام 1",
        unit: "Carton",
        Qty: 20,
      },
    ],
  },
  {
    id: 2,
    templateName: "Template 2",
    finishedItem: {
      count: 20,
      name: "تصنيع 2",
    },
    billOfMaterials: [
      {
        id: 1,
        item: "خام 2",
        unit: "Carton",
        Qty: 20,
      },
    ],
  },
];

//=======================================================================
//=======================================================================

interface TemplateData {
  id: number;
  templateName: string;
  finishedItem: {
    count: number;
    name: string;
  };
  billOfMaterials: {
    id: number;
    item: string;
    unit: string;
    Qty: number;
  }[];
}

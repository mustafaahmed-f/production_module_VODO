import { Button } from "vodo-react-components";

import TableBtn from "../../Components/TableBtn/TableBtn";
import { EyeICon } from "vodo-icons";
import { EditIcon } from "vodo-icons";

export const TabelHead = [
  { accessorKey: "view", header: <EyeICon /> },
  { accessorKey: "edit", header: <EditIcon /> },
  { accessorKey: "date", header: <Button>Date</Button> },
  { accessorKey: "createdBy", header: <Button>Created By</Button> },
  { accessorKey: "reference", header: <Button>#</Button> },
  {
    accessorKey: "templateReference",
    header: <Button>Template Reference</Button>,
  },
  { accessorKey: "dueBalance", header: <Button>Due Balance</Button> },
  { accessorKey: "qty", header: <Button>Qty</Button> },
  { accessorKey: "finishedItem", header: "Finished Item" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "receivedQty", header: "Received Qty" },
  { accessorKey: "successRatio", header: "Success Ratio" },
  { accessorKey: "failRatio", header: "Fail Ratio" },
  { accessorKey: "writeOffRefrence", header: "Write Off Refrence" },
];

export const TabelData = [
  {
    view: <TableBtn href={"/productionOrder/1"}>view</TableBtn>,
    edit: <TableBtn href={"/productionOrder/1"}>edit</TableBtn>,
    date: "2024-06-10",
    createdBy: "Mustafa",
    reference: 1,
    templateReference: 1,
    dueBalance: <TableBtn href={"/duebalance/1"}>Due balance</TableBtn>,
    qty: <Button>20</Button>,
    finishedItem: "Finished Item 1",
    status: "Status 1",
    receivedQty: "Received Qty 1",
    successRatio: "Success Ratio 1",
    failRatio: "Fail Ratio 1",
    writeOffRefrence: "Write Off Refrence 1",
  },
  {
    view: <TableBtn href={"/productionOrder/2"}>view</TableBtn>,
    edit: <TableBtn href={"/productionOrder/2"}>edit</TableBtn>,
    date: "2024-06-10",
    createdBy: "Ahmed",
    reference: 2,
    templateReference: 2,
    dueBalance: <TableBtn href={"/productionOrder/2"}>Due balance</TableBtn>,
    qty: <Button>Qty</Button>,
    finishedItem: "Finished Item 2",
    status: "Status 2",
    receivedQty: "Received Qty 2",
    successRatio: "Success Ratio 2",
    failRatio: "Fail Ratio 2",
    writeOffRefrence: "Write Off Refrence 2",
  },
];

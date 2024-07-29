import { Button } from "vodo-react-components";
import React from "react";

import TableBtn from "../../Components/TableBtn/TableBtn";
import { EyeICon } from "vodo-icons";
import { EditIcon } from "vodo-icons";

export const TabelHead = [
  {
    accessorKey: "view",
    header: (
      <div className="flex items-center justify-center ">
        <EyeICon />
      </div>
    ),
  },
  {
    accessorKey: "edit",
    header: (
      <div className="flex items-center justify-center">
        <EditIcon />
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        Date
      </TableBtn>
    ),
  },
  {
    accessorKey: "createdBy",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        Created By
      </TableBtn>
    ),
  },
  {
    accessorKey: "reference",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        #
      </TableBtn>
    ),
  },
  {
    accessorKey: "templateReference",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        Template Refrence
      </TableBtn>
    ),
  },
  {
    accessorKey: "dueBalance",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        Due Balance
      </TableBtn>
    ),
  },
  {
    accessorKey: "qty",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        Qty
      </TableBtn>
    ),
  },
  { accessorKey: "finishedItem", header: "Finished Item" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "receivedQty", header: "Received Qty" },
  { accessorKey: "successRatio", header: "Success Ratio" },
  { accessorKey: "failRatio", header: "Fail Ratio" },
  { accessorKey: "writeOffRefrence", header: "Write Off Refrence" },
];

export const TabelData = [
  {
    view: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/viewOrder/1"}
      >
        view
      </TableBtn>
    ),
    edit: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/editOrder/1"}
      >
        edit
      </TableBtn>
    ),
    date: "2024-06-10",
    createdBy: "Mustafa",
    reference: 1,
    templateReference: 1,
    dueBalance: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/duebalance/1"}
      >
        Due balance
      </TableBtn>
    ),
    qty: (
      <TableBtn className="px-2 py-1 text-white text-tableData h-fit">
        20
      </TableBtn>
    ),
    finishedItem: "Finished Item 1",
    status: "Status 1",
    receivedQty: "Received Qty 1",
    successRatio: "Success Ratio 1",
    failRatio: "Fail Ratio 1",
    writeOffRefrence: "Write Off Refrence 1",
  },
  {
    view: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/viewOrder/2"}
      >
        view
      </TableBtn>
    ),
    edit: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/editOrder/2"}
      >
        edit
      </TableBtn>
    ),
    date: "2024-06-10",
    createdBy: "Ahmed",
    reference: 2,
    templateReference: 2,
    dueBalance: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/productionOrder/2"}
      >
        Due balance
      </TableBtn>
    ),
    qty: (
      <TableBtn className="px-2 py-1 text-white text-tableData h-fit">
        40
      </TableBtn>
    ),
    finishedItem:
      "Finished Item 22222222222222222 asdf asdfasdf we rasdf asdfasdfasdf we ",
    status: "Status 2",
    receivedQty: "Received Qty 2",
    successRatio: "Success Ratio 2",
    failRatio: "Fail Ratio 2",
    writeOffRefrence: "Write Off Refrence 2",
  },
];

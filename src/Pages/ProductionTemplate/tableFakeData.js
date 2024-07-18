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
    accessorKey: "reference",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        #
      </TableBtn>
    ),
  },

  {
    accessorKey: "title",
    header: (
      <TableBtn className="px-2 py-1 text-white text-tableHead h-fit">
        Title
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
  { accessorKey: "orderType", header: "Order Type" },
  { accessorKey: "finishedItem", header: "Finished Item" },
];

export const TabelData = [
  {
    view: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/view/1"}
      >
        view
      </TableBtn>
    ),
    edit: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/edit/1"}
      >
        edit
      </TableBtn>
    ),
    date: "2024-06-10",

    reference: 1,

    title: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/duebalance/1"}
      >
        tes1
      </TableBtn>
    ),
    qty: (
      <TableBtn className="px-2 py-1 text-white text-tableData h-fit">
        20
      </TableBtn>
    ),
    orderType: "Production",
    finishedItem: "item 1",
  },
  {
    view: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/view/1"}
      >
        view
      </TableBtn>
    ),
    edit: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/edit/1"}
      >
        edit
      </TableBtn>
    ),
    date: "2024-06-10",

    reference: 1,

    title: (
      <TableBtn
        className="text-white text-tableData "
        btnClassName="px-2 py-1 h-fit"
        href={"/duebalance/1"}
      >
        test 2
      </TableBtn>
    ),
    qty: (
      <TableBtn className="px-2 py-1 text-white text-tableData h-fit">
        20
      </TableBtn>
    ),
    orderType: "Production",
    finishedItem: "item 1",
  },
];

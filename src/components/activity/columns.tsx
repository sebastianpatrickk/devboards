"use client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

type AuditLog = {
  userName: string;
  message: string;
  createdAt: Date;
};

export const columns: ColumnDef<AuditLog>[] = [
  {
    accessorKey: "userName",
    header: "User",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: (row) => {
      const date = row.getValue() as Date;
      return format(new Date(date), "MMM d, yyyy 'at' h:mm a");
    },
  },
];

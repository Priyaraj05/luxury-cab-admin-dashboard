"use client";

import { Price_Catalog } from "@/types";
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"


// This function defines the columns for the Car table
// Reference: https://tanstack.com/table/v8/docs/guide/column-defs

export const columns: ColumnDef<Price_Catalog>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "City_Info.CityName",
    header: "City Name",
    id: "City_Info.CityName",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "Car_Details.Model",
    header: "Model",
    id: "Car_Details.Model",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "Car_Details.Color",
    header: "Color",
  },
  {
    accessorKey: "Price",
    header: "Price Per Day",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("Price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
 
      return <div className="font-medium">{formatted}</div>
    },
  }
]


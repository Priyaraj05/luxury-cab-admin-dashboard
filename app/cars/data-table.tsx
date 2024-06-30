"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";
import { DataTableToolbar } from "./data-table-toolbar";
import { Price_Catalog } from "@/types";
import { PlaceOrderButton } from "@/components/place-order-button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterData: Price_Catalog;
}

// This function defines the Car table
// It takes in columns, data, and filterData as props
// It uses the useReactTable hook to create a table instance
// Reference: https://tanstack.com/table/v8/docs/api/core/table
// It returns a React component that renders the table

export function DataTable<TData, TValue>({
  columns,
  data,
  filterData,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  // The table instance is created using the useReactTable hook
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    enableMultiRowSelection: false,
    state: {
      columnFilters,
      rowSelection,
    },
  });

  // Bool to check if a row is selected
  const isRowsSelected = table.getSelectedRowModel().rows.length > 0;

  return (
    <div>
      {/* The DataTableToolbar component is used to display the filters for the table */}
      <DataTableToolbar table={table} data={filterData} />

      <div className="rounded-md border mt-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* The Place order button becomes visible only if the user selects a row*/}
      <div className="mt-3">
      <p>* Select a car to place order</p>
        {isRowsSelected && (
          <PlaceOrderButton
            selectedRows={JSON.stringify(
              table.getSelectedRowModel().flatRows[0].original,
              null,
              2
            )}
          />
        )}
      </div>
    </div>
  );
}

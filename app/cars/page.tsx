import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/shell";

import { AddCarButton } from "@/components/add-car-button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata = {
  title: "Dashboard",
};

export default function AddCar() {
  return (
    <>
      <DashboardShell className="container">
        <DashboardHeader heading="Cars" text="Add and manage car details.">
          <AddCarButton />
        </DashboardHeader>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>VIN</TableHead>
                <TableHead className="text-right">Miles Driven</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">BMW</TableCell>
                <TableCell>XM</TableCell>
                <TableCell>2023</TableCell>
                <TableCell>1HGBH41JXMN109186</TableCell>
                <TableCell className="text-right">25120.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Acura</TableCell>
                <TableCell>MDX</TableCell>
                <TableCell>2015</TableCell>
                <TableCell>1XMBH41JXMN100686</TableCell>
                <TableCell className="text-right">112190.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cadillac</TableCell>
                <TableCell>Escalade</TableCell>
                <TableCell>2020</TableCell>
                <TableCell>1YRNC41JXUE100837</TableCell>
                <TableCell className="text-right">82070.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DashboardShell>
    </>
  );
}

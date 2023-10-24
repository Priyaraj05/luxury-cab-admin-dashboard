

import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/shell";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { PersonStanding } from "lucide-react";
import { AddDriverButton } from "@/components/add-driver-button";


export const metadata = {
  title: "Dashboard",
};

export default function AddDriver() {
  return (
    <> 
      <DashboardShell className="container">
        <DashboardHeader heading='Drivers' text='Add and manage driver details.'>
          <AddDriverButton />
        </DashboardHeader>
        <div>
          <EmptyPlaceholder>
            <PersonStanding />
            <EmptyPlaceholder.Title>
              No drivers in the list
            </EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You dont have any drivers yet. Start adding drivers.
            </EmptyPlaceholder.Description>
            <AddDriverButton />
          </EmptyPlaceholder>
        </div>
      </DashboardShell>
  </>
  );
}
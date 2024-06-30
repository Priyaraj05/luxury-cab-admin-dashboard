import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/shell";
import supabase from "@/supabaseClient";
import { DataTable } from "./data-table";
import { columns } from "./columns";


export const metadata = {
  title: "Dashboard",
};

export default async function SearchCar() {

  // The data is fetched from the database using the supabaseClient

  const { data: tableData } = await supabase
  .from("Price_Catalog")
  .select(`
    price_id,
    Price,
    City_Info(
      City_id,
      CityName
    ),
    Car_Details(
      Car_id,
      Model,
      Color
    )
  `);

  return (
    <>
      <DashboardShell className="container">
        <DashboardHeader heading="Cars" text="Add and manage car details.">
        </DashboardHeader>
        <DataTable columns={columns} data={tableData} filterData={tableData}/>
      </DashboardShell>
    </>
  );
}

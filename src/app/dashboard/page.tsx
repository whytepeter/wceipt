"use client";
import DashboardStats from "@/components/Dashboard/DashboardStats";
import RecentSales from "@/components/Dashboard/RecentSales";
import TopSellingProduct from "@/components/Dashboard/TopSellingProduct";
import TotalSales from "@/components/Dashboard/TotalSales";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-6 pt-4">
      <DashboardStats />

      <div className="flex flex-col md:flex-row md:justify-between gap-5">
        <div className="flex-grow">
          <TotalSales />
        </div>
        <TopSellingProduct />
      </div>

      <RecentSales />
    </main>
  );
}

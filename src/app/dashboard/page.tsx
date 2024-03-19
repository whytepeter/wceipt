"use client";
import DashboardStats from "@/components/Dashboard/DashboardStats";
import RecentSales from "@/components/Sales/RecentSales";
import TopSellingProduct from "@/components/Dashboard/TopSellingProduct";
import TotalSales from "@/components/Dashboard/TotalSales";
import { formatDate } from "@/utils";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-6 pt-4">
      {/* <div className="flex items-center justify-between md:justify-start gap-4">
        <h3>Overview</h3>
        <div className="cursor-pointer   group hover:border-primary-200 hover:bg-primary-100 hover:text-primary w-fit text-xs p-2 rounded-xl bg-background border border-outline flex items-center gap-2">
          <i className="pi pi-calendar text-dark-200 group-hover:text-primary" />
          <span>Today</span>
          <i className="pi pi-chevron-down text-xs text-dark-200" />
        </div>
      </div> */}
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

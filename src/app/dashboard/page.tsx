"use client";
import InfoCard from "@/components/Dashboard/InfoCard";
import RecentSales from "@/components/Dashboard/RecentSales";
import TopSellingProduct from "@/components/Dashboard/TopSellingProduct";
import TotalSales from "@/components/Dashboard/TotalSales";
import { formatAmount } from "@/utils";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: formatAmount(1120345),
    },
    {
      title: "Total Products",
      value: (345).toLocaleString(),
    },
    {
      title: "Total Reciepts",
      value: (1345).toLocaleString(),
    },
    {
      title: "Low on stocks",
      value: 10,
      plain: true,
      color: "text-error",
    },
  ];

  return (
    <main className="flex flex-col gap-6 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((el, index) => (
          <InfoCard
            key={index}
            title={el.title}
            value={el.value}
            plain={el?.plain}
            color={el?.color}
          />
        ))}
      </div>

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

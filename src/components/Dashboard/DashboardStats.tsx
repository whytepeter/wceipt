import { formatAmount } from "@/utils";
import React from "react";
import InfoCard from "./InfoCard";

import useGetStats from "@/hooks/useGetStats";

export default function DashboardStats() {
  const { totalSales, totalProducts, totalReceipt, lowStocks } = useGetStats();

  const stats = [
    {
      title: "Total Sales",
      value: formatAmount(totalSales),
    },
    {
      title: "Total Products",
      value: totalProducts.toLocaleString(),
    },
    {
      title: "Total Reciepts",
      value: totalReceipt.toLocaleString(),
    },
    {
      title: "Low on stocks",
      value: lowStocks.toLocaleString(),
      plain: true,
      body: (
        <div className="flex items-center justify-between">
          <span className="text-error font-semibold">{lowStocks}</span>
          <span className="cursor-pointer px-3 border border-primary-200  py-1 text-xs bg-primary-100 text-primary-200 rounded-lg">
            View
          </span>
        </div>
      ),
    },
  ];

  console.log(stats);

  return (
    <div className="grid grid-cols-2  md:grid-cols-4  gap-3 sm:gap-4">
      {stats.map((el, index) => (
        <InfoCard
          key={index}
          title={el.title}
          value={el.value}
          plain={el?.plain}
          body={el?.body}
        />
      ))}
    </div>
  );
}

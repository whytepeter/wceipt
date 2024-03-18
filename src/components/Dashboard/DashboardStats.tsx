import { formatAmount } from "@/utils";
import React from "react";
import InfoCard from "./InfoCard";

export default function DashboardStats() {
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
      body: (
        <div className="flex items-center justify-between">
          <span className="text-error font-semibold">{10}</span>
          <span className="cursor-pointer px-3 border border-primary-200  py-1 text-xs bg-primary-100 text-primary-200 rounded-lg">
            View
          </span>
        </div>
      ),
    },
  ];

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

import React from "react";
import Card from "../Global/Card";
import { formatDate } from "@/utils";

export default function TotalSales() {
  const leftArea = (
    <div>
      <div className="cursor-pointer group hover:border-primary-200 hover:bg-primary-100 hover:text-primary min-w-28 w-fit text-xs p-2 rounded-xl bg-background border border-outline flex items-center gap-1">
        <i className="pi pi-calendar text-dark-200 group-hover:text-primary" />
        <span>{formatDate(new Date())}</span>
      </div>
    </div>
  );
  return <Card leftArea={leftArea} title="Total Sales"></Card>;
}

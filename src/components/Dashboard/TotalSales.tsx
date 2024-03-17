import React from "react";
import Card from "../Global/Card";

export default function TotalSales() {
  const leftArea = (
    <div>
      <div className="w-20 p-3 rounded-xl bg-background border border-outline"></div>
    </div>
  );
  return <Card leftArea={leftArea} title="Total Sales"></Card>;
}

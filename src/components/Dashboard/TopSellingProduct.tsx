import React from "react";
import Card from "../Global/Card";
import ProductCard from "../Products/ProductCard";

export default function TopSellingProduct() {
  const length = 5;
  return (
    <Card className="w-[500px]" title={`Top ${length} selling products`}>
      <div className="flex flex-col gap-4 max-h-52 overflow-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Card>
  );
}

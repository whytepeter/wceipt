import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from ".";

export default function useGetStats() {
  const { products, sales, receipts } = useAppSelector((state) => state.data);

  const [lowStocks, setLowStocks] = useState(4);

  const totalSales = useMemo(() => {
    if (!sales?.length) return 0;
    const total =
      sales.reduce((total, sale) => total + sale?.totalPrice, 0) || 0;
    return total;
  }, [sales]);

  const totalProducts = useMemo(() => {
    const total = products?.length || 0;
    return total;
  }, [products]);

  const totalReceipt = useMemo(() => {
    const total = receipts?.length || 0;
    return total;
  }, [receipts]);

  return { totalSales, totalProducts, totalReceipt, lowStocks };
}

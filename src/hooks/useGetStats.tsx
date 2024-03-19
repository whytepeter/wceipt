import React, { useEffect, useState } from "react";
import { useAppSelector } from ".";

export default function useGetStats() {
  const { products, sales, receipts } = useAppSelector((state) => state.data);

  const [totalSales, setTotalSales] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalReceipt, setTotalReceipt] = useState(0);
  const [lowStocks, setLowStocks] = useState(4);

  useEffect(() => {
    const totalS = () => {
      if (!sales?.length) return 0;
      const total =
        sales.reduce((total, sale) => total + sale?.totalPrice, 0) || 0;
      return total;
    };
    setTotalSales(totalS);

    const totalP = () => {
      const total = products?.length || 0;
      return total;
    };
    setTotalProducts(totalP);

    const totalR = () => {
      const total = receipts?.length || 0;
      return total;
    };

    setTotalReceipt(totalR);
  }, [products, sales, receipts]);

  return { totalSales, totalProducts, totalReceipt, lowStocks };
}

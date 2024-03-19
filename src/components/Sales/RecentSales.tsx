"use client";
import React, { useState } from "react";
import { TableHeadersProps } from "@/types/types";
import { formatAmount, formatDate } from "@/utils";
import Table from "../Global/Table";
import Card from "../Global/Card";
import Button from "../Global/Button";
import SalesCard from "./SalesCard";
import SalesMobileTable from "./SalesMobileTable";

type VData = {
  name: string;
  description?: string;
  quantity: number;
  sellingPrice: number;
  products: any[];
  date: Date;
  _id: string;
};

export default function RecentSales() {
  const [loading, setLoading] = useState(false);

  const [tableData, setTableData] = useState<VData[]>([
    {
      name: "Mac Book Pro",
      description: "This is a mac book pro M2 2023",
      quantity: 3,
      sellingPrice: 200000,
      products: [],
      date: new Date(),
      _id: "1",
    },
    {
      name: "iphone 14",
      description: "Iphone 14, black, silver bla bla bla",
      quantity: 2,
      sellingPrice: 120000,
      products: [],
      date: new Date(),
      _id: "2",
    },
  ]);

  const tableHeaders: TableHeadersProps[] = [
    {
      title: "Product",
      field: "name",
      body: (data: VData) => {
        return <SalesCard />;
      },
    },
    {
      title: "Selling Price",
      field: "sellingPrice",
      body: (data: VData) => {
        return <div>{formatAmount(data.sellingPrice)}</div>;
      },
    },
    {
      title: "Quantity",
      field: "quantity",
      body: (data: VData) => {
        return <div>{data.quantity.toLocaleString()}</div>;
      },
    },

    {
      title: "Date",
      field: "date",
      body: (data: VData) => {
        return (
          <div className="flex items-center justify-between">
            <span> {formatDate(data.date)}</span>
            <Button
              className="rounded-full px-4 "
              size="small"
              variant="outlined"
              color="primary-light"
            >
              View
            </Button>
          </div>
        );
      },
    },
  ];

  const leftArea = (
    <Button size="small" variant="text" color="primary-light">
      See all
    </Button>
  );

  return (
    <Card title="Recent Sales" leftArea={leftArea}>
      <div className="w-fullflex flex-col gap-4  ">
        <Table
          data={tableData}
          headers={tableHeaders}
          loading={loading}
          desktopOnly
        >
          <SalesMobileTable />
        </Table>
      </div>
    </Card>
  );
}

"use client";
import React, { useState } from "react";
import { TableHeadersProps } from "@/types/types";
import ProductMobileTable from "@/components/Products/ProductMobileTable";
import { formatDate } from "@/utils";
import Table from "../Global/Table";
import Card from "../Global/Card";

type VData = {
  name: string;
  email: string;
  date: Date;
  _id: string;
};

export default function RecentSales() {
  const [loading, setLoading] = useState(false);

  const [tableData, setTableData] = useState<VData[]>([
    {
      name: "Jouh doe",
      email: "johndoe@gmail.com",
      date: new Date(),
      _id: "1",
    },
    {
      name: "Williams doe",
      email: "williams@gmail.com",
      date: new Date(),
      _id: "2",
    },
  ]);

  const tableHeaders: TableHeadersProps[] = [
    {
      title: "Product",
      field: "name",
      body: (data: VData) => {
        return (
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary-100"></div>
            <div> {data.name}</div>
          </div>
        );
      },
    },
    {
      title: "Quantity",
      field: "quantity",
    },
    {
      title: "Selling Price",
      field: "sellingPrice",
    },
    {
      title: "Date",
      field: "date",
      body: (data: VData) => {
        return <div> {formatDate(data.date)}</div>;
      },
    },
  ];

  return (
    <Card title="Recent Sales">
      <div className="w-fullflex flex-col gap-4  ">
        <Table
          data={tableData}
          headers={tableHeaders}
          loading={loading}
          desktopOnly
        >
          <ProductMobileTable />
        </Table>
      </div>
    </Card>
  );
}

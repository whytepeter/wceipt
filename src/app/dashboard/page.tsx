"use client";

import { useEffect, useState } from "react";
import Table from "@/components/global/Table";
import { formatDate } from "@/utils";
import { TableHeadersProps } from "@/types/types";

type VData = {
  name: string;
  email: string;
  date: Date;
  _id: string;
};

export default function Dashboard() {
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
      title: "First Name",
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
      title: "Email",
      field: "email",
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
    <>
      <div className="w-full text-2xl flex flex-col gap-4 p-4 md:px-6 ">
        Home
        <Table data={tableData} headers={tableHeaders} loading={loading} />
      </div>
    </>
  );
}

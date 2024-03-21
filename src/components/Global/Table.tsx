import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnBodyOptions } from "primereact/column";
import { TableProps } from "@/types/types";
import Loader from "./Loader";

export default function Table(props: TableProps) {
  const {
    data,
    headers,
    stripedRows = true,
    selectable = false,
    dataKey = "_id",
    scrollHeight = "30rem",
    selectionMode = "multiple",
    selectedData,
    onSelectionChange,
    scrollable = true,
    loading = false,
    desktopOnly = false,
    children,
    ...rest
  } = props;

  const bodyTemplate = (data: any, options: ColumnBodyOptions) => {
    return <div>{data[options?.field]}</div>;
  };

  const handleSectionChange = (e: any) => {
    onSelectionChange && onSelectionChange(e.value);
  };

  return (
    <div className="relative overflow-hidden  pt-1">
      {/* //// Loading ////// */}
      {loading && (
        <div
          className={`mx-2 rounded-none w-full absolute left-0 top-0 bottom-0 right-0 h-full bg-white/10 backdrop-blur-[2px] z-10 flex items-center justify-center`}
        >
          <Loader />
        </div>
      )}

      <div className={`${desktopOnly ? "hidden md:block" : ""}`}>
        <DataTable
          id="table-style"
          {...rest}
          selection={selectedData}
          onSelectionChange={handleSectionChange}
          stripedRows={stripedRows}
          scrollable={scrollable}
          columnResizeMode="fit"
          value={data}
          tableStyle={{ minWidth: "50rem" }}
        >
          {/* //If selectable is enabled// */}
          {selectable && (
            <Column
              selectionMode={selectionMode}
              headerStyle={{ width: "3rem" }}
            ></Column>
          )}

          {headers.map((col) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.title}
              body={col.body || bodyTemplate}
            />
          ))}
        </DataTable>
      </div>

      {desktopOnly && <div className="block md:hidden">{children}</div>}
    </div>
  );
}

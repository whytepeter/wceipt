import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

type TableHeadersProps = {
  title: string;
  style?: string;
  field: string;
  sortable?: boolean;
  frozen?: boolean;
  body?: React.ReactNode | Function;
  onRowClick?: () => void;
};

type TableProps = {
  data: Array<any>;
  headers: TableHeadersProps[];
  selectable?: boolean;
  stripedRows?: boolean;
  showGridlines?: boolean;
  sortMode?: "single" | "multiple";
  scrollable?: boolean;
  loading?: boolean;
  dataKey?: string;
  selectionMode?: "multiple" | "single";
  scrollHeight?: string;
  onRowSelect?: () => void;
  onRowUnselect?: () => void;
};

export default function Table(props: TableProps) {
  const {
    data,
    headers,
    selectable,
    dataKey = "_id",
    scrollHeight = "30rem",
    selectionMode = "multiple",
    scrollable = true,
    ...rest
  } = props;

  const bodyTemplate = (value: any): React.ReactNode => {
    return <div>{value}</div>;
  };

  return (
    <div className="relative overflow-hidden md:rounded-t-3xl pt-1">
      <div className="card">
        <DataTable
          id="table-style"
          className="hidden md:block"
          {...rest}
          scrollable={scrollable}
          columnResizeMode="fit"
          value={data}
          tableStyle={{ minWidth: "50rem" }}
        >
          {/* //If selectable is enabled// */}
          {selectable ?? (
            <Column
              selectionMode={selectionMode}
              headerStyle={{ width: "3rem" }}
            ></Column>
          )}

          {headers.map((col) => (
            <Column key={col.field} field={col.field} header={col.title} />
          ))}
        </DataTable>
      </div>
    </div>
  );
}

//// Component Props Types ////

import { ColumnBodyOptions } from "primereact/column";

export type TableHeadersProps = {
  title: string;
  style?: string;
  field: string;
  sortable?: boolean;
  frozen?: boolean;
  body?:
    | React.ReactNode
    | ((data: any, options: ColumnBodyOptions) => React.ReactNode);
  onRowClick?: () => void;
};

export type TableProps = {
  data: any[];
  headers: TableHeadersProps[];
  selectable?: boolean;
  stripedRows?: boolean;
  showGridlines?: boolean;
  sortMode?: "single" | "multiple";
  scrollable?: boolean;
  loading?: boolean;
  desktopOnly?: boolean;
  dataKey?: string;
  children?: React.ReactNode;
  selectionMode?: "multiple" | "single";
  scrollHeight?: string;
  onRowSelect?: () => void;
  onRowUnselect?: () => void;
  selectedData?: any[] | null;
  onSelectionChange?: (e: any) => void;
};

export type SelectOptionType = {
  label: string;
  value: string;
};

export type MenuItemsType = {
  href: string;
  title: string;
  icon: React.ReactNode | null;
  mobile?: boolean;
  desktop?: boolean;
};

///// Auth Props /////

export type SignUpUserType = {
  full_name: string;
  email: string;
  phone: string;
  password: string;
};

export type SignInUserType = {
  email: string;
  password: string;
};

export type UserType = {
  full_name: string;
  email: string;
  phone: string;
  userId: string;

  password: string;
  createdAt: Date | null | string;

  verified: boolean;
  blocked: boolean;
  deleted: boolean;
  blockedMessage: string;

  business: string | null;
  roleId: string;
  roleDetails: Role | null;
};

export type Role = {
  id: string;
  name: string;
  permissions: string[];
  createdAt: string;
};

export type Roles = Role[];

export type BusinessType = {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  address: string;
  createdAt: Date | null | string;
};

export type CustomerType = {
  id: string;
  userId: string;
  businessId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
};

export type ProductType = {
  id: string;
  userId: string;
  businessId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
  createdAt: Date | null | string;
};

//Receip Types

export type ReceiptProductType = {
  product: ProductType;
  quantity: number;
  priceSold: number;
};

export type ReceiptType = {
  id: string;
  userId: string;
  businessId: string;
  customer: CustomerType;
  receiptNumber: number;
  products: ReceiptProductType[];
  description: string;
  createdAt: Date;
};

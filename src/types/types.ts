//// Component Props Types ////

import { ColumnBodyOptions } from "primereact/column";

export type TextInputType = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  error?: boolean | string;
  hint?: string;
  format?: boolean;
  righIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  leftIconClick?: () => void;
  rightIconClick?: () => void;
};

export interface SelectInputType {
  id?: string;
  name?: string;
  value: string;
  options: SelectOptionType[] | null;
  autoHeight?: boolean;
  placeholder?: string;
  error?: boolean | string;
  hint?: string;
  disabled?: boolean;
  className?: string;
  styles?: Object;
  search?: boolean;
  leftIcon?: React.ReactNode;
  action?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelect?: (value: string) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

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

export type ListItemType = {
  href?: string;
  title: string;
  description?: string;
  icon: React.ReactNode | null;
};

export type ListType = {
  item: ListItemType;
  onClick?: () => void;
};

export type MenuItemsType = {
  href: string;
  title: string;
  icon: React.ReactNode | null;
  onClick?: () => void;
  mobile?: boolean;
  desktop?: boolean;
};

export type InfoCardProps = {
  title: string;
  value: string | number;
  plain?: boolean;
  body?: React.ReactNode;
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

////// User Types //////

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

////// Business Types

export type BusinessType = {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  address: string;
  logo?: string | null;
  createdAt: Date | null | string;
};

//// Product Types ////

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

//Sales Types

export type SalesProductType = {
  product: ProductType;
  quantity: number;
  sellingPrice: number;
};

export type SalesType = {
  id: string;
  userId: string;
  businessId: string;
  receiptId: string;
  totalPrice: number;
  totalQuantity: number;
  products: SalesProductType[];
  customer: CustomerType;
};

export type ReceiptType = {
  id: string;
  userId: string;
  businessId: string;
  customer: CustomerType;
  receiptNumber: number;
  products: SalesProductType[];
  description: string;
  createdAt: Date | string;
};

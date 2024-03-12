export type SignUpUserType = {
  full_name: string;
  email: string;
  phone: string;
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

  organization: OrganizationType[] | null;
  role: Role | null;
};

export type Role = {
  id: string;
  name: string;
  permissions: string[];
  createdAt: string;
};

export type Roles = Role[];

export type OrganizationType = {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  address: string;
  createdAt: Date;
};

export type CustomerType = {
  id: string;
  userId: string;
  organizationId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
};

export type ProductType = {
  id: string;
  userId: string;
  organizationId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
  createdAt: Date;
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
  organizationId: string;
  customer: CustomerType;
  receiptNumber: number;
  products: ReceiptProductType[];
  description: string;
  createdAt: Date;
};

//Components Type
export type SelectOptionType = {
  label: string;
  value: string;
};

export type MenuItemsType = {
  href: string;
  title: string;
  icon: React.ReactNode | null;
};

export interface UserType {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  userId: String;

  password: String;
  createdAt: Date | null;

  verified: Boolean;
  blocked: Boolean;
  deleted: Boolean;
  blockedMessage: String;

  organization: OrganizationType[];
  roles: Roles[];
}

export interface Roles {
  id: String;
  name: String;
  permissions: Permissions[];
  createdAt: String;
}

export interface OrganizationType {
  id: String;
  userId: String;
  name: String;
  email: String;
  phone: String;
  type: String;
  address: String;
  createdAt: Date;
}

export interface CustomerType {
  id: String;
  userId: String;
  organizationId: String;
  name: String;
  email: String;
  phone: String;
  address: String;
  createdAt: Date;
}

export interface ProductType {
  id: String;
  userId: String;
  organizationId: String;
  name: String;
  image: String;
  price: Number;
  quantity: Number;
  description: String;
  createdAt: Date;
}

//Receip Types

export interface ReceiptProductType {
  product: ProductType;
  quantity: Number;
  priceSold: Number;
}

export interface ReceiptType {
  id: String;
  userId: String;
  organizationId: String;
  customer: CustomerType;
  receiptNumber: Number;
  products: ReceiptProductType[];
  description: String;
  createdAt: Date;
}

//Components Type
export interface SelectOptionType {
  label: string;
  value: string;
}

export interface MenuItemsType {
  href: string;
  title: string;
  icon: React.ReactNode | null;
}

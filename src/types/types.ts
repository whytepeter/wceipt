export type UserType = {
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
};

export type Roles = {
  id: String;
  name: String;
  permissions: Permissions[];
  createdAt: String;
};

export type OrganizationType = {
  id: String;
  userId: String;
  name: String;
  email: String;
  phone: String;
  type: String;
  address: String;
  createdAt: Date;
};

export type CustomerType = {
  id: String;
  userId: String;
  organizationId: String;
  name: String;
  email: String;
  phone: String;
  address: String;
  createdAt: Date;
};

export type ProductType = {
  id: String;
  userId: String;
  organizationId: String;
  name: String;
  image: String;
  price: Number;
  quantity: Number;
  description: String;
  createdAt: Date;
};

//Receip Types

export type ReceiptProductType = {
  product: ProductType;
  quantity: Number;
  priceSold: Number;
};

export type ReceiptType = {
  id: String;
  userId: String;
  organizationId: String;
  customer: CustomerType;
  receiptNumber: Number;
  products: ReceiptProductType[];
  description: String;
  createdAt: Date;
};

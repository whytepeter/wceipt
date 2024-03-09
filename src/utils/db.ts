import { formatDate } from "@/utils";

export const permissions = [
  "Add_Receipt",
  "Add_Receipt",
  "Add_Staff",
  "Edit_Staff",
  "Add_Customer",
  "Edit_Customer",
  "Add_Product",
  "Edit_Product",
  "Add_Organization",
  "Edit_Organization",
  "View_Wallet",
];

export const defaultRoles = [
  {
    id: "",
    name: "Admin",
    permissions,
    createdAt: formatDate(new Date()),
  },
  {
    id: "",
    name: "User",
    permissions,
    createdAt: formatDate(new Date()),
  },
  {
    id: "",
    name: "Staff",
    permissions: [
      "Add_Receipt",
      "Add_Receipt",
      "Add_Customer",
      "Edit_Customer",
      "Add_Product",
      "Edit_Product",
      "View_Wallet",
    ],
    createdAt: formatDate(new Date()),
  },
  {
    id: "",
    name: "Customer",
    permissions: [],
    createdAt: formatDate(new Date()),
  },
];

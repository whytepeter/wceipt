import { doc, collection, addDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { formatDate } from "@/utils";
import { Role } from "@/types/types";
import permissions from "@/utils/permissions";

export const initRoles = async () => {
  const roles = [
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

  // Create an array of promises for each role creation
  const roleCreationPromises = roles.map(async (role) => createRole(role));

  try {
    // Wait for all role creation promises to resolve or reject
    await Promise.all(roleCreationPromises);
    console.log("All roles initialized successfully!");
  } catch (error: any) {
    console.error("Error initializing roles:", error.message);
  }
};

export const createRole = async (role: Role) => {
  try {
    //create role
    const roleRef = await addDoc(collection(db, "roles"), role);
    //update role with unique id
    await updateDoc(roleRef, {
      id: roleRef?.id,
    });
  } catch (error: any) {
    console.error("Error creating role:", error.message);
    throw error;
  }
};

export const deleteRole = async (roleId: string) => {};

export const updateRole = async (role: Role) => {
  try {
    //Get role ref
    const roleRef = doc(db, "roles", role.id);
    //update role
    await updateDoc(roleRef, role);
  } catch (error: any) {
    console.error("Error updating role:", error.message);
    throw error;
  }
};

export const getAllRole = async () => {};

export const getRoleByID = async (roleId: string) => {};

import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/services/firebase";

import { Role, Roles } from "@/types/types";
import { defaultRoles } from "@/utils/db";

// Add default roles to DB
export const initRoles = async () => {
  // Create an array of promises for each role creation
  const roleCreationPromises = defaultRoles.map(async (role) =>
    createRole(role)
  );

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

export const getAllRoles = async (): Promise<Roles> => {
  try {
    const q = query(collection(db, "roles"));
    const querySnapshot = await getDocs(q);

    const roles: Roles = [];
    querySnapshot.forEach((doc) => {
      const roleData = doc.data() as Role; // Cast the data to Role type
      roles.push(roleData);
    });

    return roles;
  } catch (error: any) {
    console.log("Error fetching roles", error.message);
    throw error;
  }
};

export const getRoleByName = async (roleName: string): Promise<Role> => {
  try {
    const q = query(collection(db, "roles"), where("name", "==", roleName));
    const querySnapshot = await getDocs(q);

    const roles: Roles = [];
    querySnapshot.forEach((doc) => {
      const roleData = doc.data() as Role; // Cast the data to Role type
      roles.push(roleData);
    });

    return roles[0];
  } catch (error) {
    throw error;
  }
};

export const getRoleByID = async (roleId: string): Promise<Role> => {
  try {
    const q = query(collection(db, "roles"), where("id", "==", roleId));
    const querySnapshot = await getDocs(q);

    const roles: Roles = [];
    querySnapshot.forEach((doc) => {
      const roleData = doc.data() as Role; // Cast the data to Role type
      roles.push(roleData);
    });

    return roles[0];
  } catch (error) {
    throw error;
  }
};

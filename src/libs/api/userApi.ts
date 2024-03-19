import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  collection,
  setDoc,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { SignUpUserType, UserType } from "@/types/types";
import { formatDate } from "@/utils";
import { getRoleByName } from "./roleApi";

export const createUser = async (user: UserType, roleName: string) => {
  try {
    //Get user role
    const role = await getRoleByName(roleName);

    const userDetails: UserType = {
      ...user,
      roleId: role?.id,
      roleDetails: null,
    };

    await setDoc(doc(db, "users", user?.userId), userDetails);
  } catch (error: any) {
    console.log("error creating user", error.message);
    throw error;
  }
};

export const getUserByID = async (userId: string): Promise<UserType> => {
  try {
    const q = query(collection(db, "users"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const users: UserType[] = [];
    querySnapshot.forEach((doc) => {
      const userData = doc.data() as UserType; // Cast the data to User type
      users.push(userData);
    });

    return users[0];
  } catch (error: any) {
    console.log("error getting user", error.message);
    throw error;
  }
};

export const getStaffByBusiness = async (
  businessId: string,
  roleId: string
): Promise<UserType[]> => {
  try {
    const q = query(
      collection(db, "sales"),
      where("businessId", "==", businessId),
      where("roleId", "==", roleId)
    );
    const querySnapshot = await getDocs(q);

    const staffs: UserType[] = [];
    querySnapshot.forEach((doc) => {
      const staffData = doc.data() as UserType; // Cast the data to Role type
      staffs.push(staffData);
    });

    return staffs;
  } catch (error: any) {
    console.log("error getting staffs", error.message);
    throw error;
  }
};

export const updateUser = async (userId: string, user: UserType) => {};
export const deleteUser = async () => {};

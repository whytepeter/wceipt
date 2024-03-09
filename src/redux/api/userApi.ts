import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
  } catch (error) {}
};

export const updateUser = async (userId: string, user: UserType) => {};
export const deleteUser = async () => {};

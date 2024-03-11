import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { SignInUserType, SignUpUserType, UserType } from "@/types/types";
import { formatDate } from "@/utils";
import { getRoleByID, getRoleByName } from "./roleApi";
import { getUserByID } from "./userApi";

export const signUpUser = async (user: SignUpUserType): Promise<UserType> => {
  const { email, password } = user;

  try {
    //Get user role
    const role = await getRoleByName("User");

    //Sign up user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //Add user detials to database
    const userId = userCredential?.user?.uid;
    const userDetails: UserType = {
      ...user,
      userId,
      createdAt: formatDate(new Date()),

      verified: false,
      blocked: false,
      deleted: false,
      blockedMessage: "",
      business: null,
      roleId: role?.id,
      roleDetails: null,
    };

    await setDoc(doc(db, "users", userId), userDetails);

    return userDetails;
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

export const signInUser = async (user: SignInUserType): Promise<UserType> => {
  const { email, password } = user;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    //Get user detials from database
    const userId = userCredential?.user?.uid;
    const userData = await getUserByID(userId);

    //Get user role
    const role = await getRoleByID(userData.roleId);

    return { ...userData, roleDetails: role };
  } catch (error: any) {
    console.error("Error singing in:", error.message);
    throw error;
  }
};
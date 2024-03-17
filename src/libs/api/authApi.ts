import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
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
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

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
    console.log("user credentials", userCredential);
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

export const checkAuthState = async (): Promise<boolean> => {
  try {
    let isUser;
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      isUser = user;
    });
    return !!isUser;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { SignUpUserType, UserType } from "@/types/types";
import { formatDate } from "@/utils";
import { getRoleByName } from "./roleApi";

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

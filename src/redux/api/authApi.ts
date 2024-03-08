import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { SignUpUserType, UserType } from "@/types/types";
import { formatDate } from "@/utils";

export const createUser = async (
  user: SignUpUserType
): Promise<UserCredential> => {
  const { email, password } = user;

  try {
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
      organization: null,
      role: null,
    };

    await setDoc(doc(db, "users", userId), userDetails);

    return userCredential;
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

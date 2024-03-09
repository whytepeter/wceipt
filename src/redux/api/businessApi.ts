import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { BusinessType } from "@/types/types";

export const createBusiness = async (payload: BusinessType) => {
  try {
    //create business
    const businessRef = await addDoc(collection(db, "business"), payload);

    //update business with unique id
    await updateDoc(businessRef, {
      id: businessRef?.id,
    });
  } catch (error: any) {
    console.error("Error creating business:", error.message);
    throw error;
  }
};

import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  getDocs,
  getDoc,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "@/services/firebase";
import { BusinessType } from "@/types/types";

export const createBusiness = async (
  payload: BusinessType
): Promise<BusinessType> => {
  try {
    //create business
    const businessRef = await addDoc(collection(db, "business"), payload);

    //update business with unique id
    await updateDoc(businessRef, {
      id: businessRef?.id,
    });

    const businessData = { ...payload, id: businessRef?.id };
    return businessData;
  } catch (error: any) {
    console.error("Error creating business:", error.message);
    throw error;
  }
};

export const getBusinessByUserID = async (
  userId: string
): Promise<BusinessType[]> => {
  try {
    const q = query(collection(db, "business"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);

    const businesses: BusinessType[] = [];
    querySnapshot.forEach((doc) => {
      const businessData = doc.data() as BusinessType; // Cast the data to Role type
      businesses.push(businessData);
    });

    return businesses;
  } catch (error: any) {
    console.log("error getting business", error.message);
    throw error;
  }
};

export const getBusinessByID = async (
  id: string
): Promise<BusinessType | null> => {
  try {
    const docRef = doc(db, "business", id);
    const docSnap = await getDoc(docRef);

    let business = null;
    if (docSnap.exists()) {
      business = docSnap.data() as BusinessType;
    } else {
      console.log("No such document!");
    }

    return business;
  } catch (error: any) {
    console.log("error getting business", error.message);
    throw error;
  }
};

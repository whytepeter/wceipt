import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  addDoc,
  updateDoc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { db } from "@/libs/firebase";
import { SalesType } from "@/types/types";

export const createSale = async (payload: SalesType): Promise<SalesType> => {
  try {
    //create sale
    const saleRef = await addDoc(collection(db, "sales"), payload);

    //update sale with unique id
    await updateDoc(saleRef, {
      id: saleRef?.id,
    });

    const saleData = { ...payload, id: saleRef?.id };
    return saleData;
  } catch (error: any) {
    console.error("Error creating sale:", error.message);
    throw error;
  }
};

export const getSalesByBusiness = async (
  businessId: string
): Promise<SalesType[]> => {
  try {
    const q = query(
      collection(db, "sales"),
      where("businessId", "==", businessId)
    );
    const querySnapshot = await getDocs(q);

    const sales: SalesType[] = [];
    querySnapshot.forEach((doc) => {
      const saleData = doc.data() as SalesType; // Cast the data to Role type
      sales.push(saleData);
    });

    return sales;
  } catch (error: any) {
    console.log("error getting sales", error.message);
    throw error;
  }
};

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
import { CustomerType } from "@/types/types";

export const createCustomer = async (
  payload: CustomerType
): Promise<CustomerType> => {
  try {
    //create customer
    const customerRef = await addDoc(collection(db, "customers"), payload);

    //update customer with unique id
    await updateDoc(customerRef, {
      id: customerRef?.id,
    });

    const customerData = { ...payload, id: customerRef?.id };
    return customerData;
  } catch (error: any) {
    console.error("Error creating customer:", error.message);
    throw error;
  }
};

export const getCustomersByBusiness = async (
  businessId: string
): Promise<CustomerType[]> => {
  try {
    const q = query(
      collection(db, "customers"),
      where("businessId", "==", businessId)
    );
    const querySnapshot = await getDocs(q);

    const customers: CustomerType[] = [];
    querySnapshot.forEach((doc) => {
      const customerData = doc.data() as CustomerType; // Cast the data to Role type
      customers.push(customerData);
    });

    return customers;
  } catch (error: any) {
    console.log("error getting customers", error.message);
    throw error;
  }
};

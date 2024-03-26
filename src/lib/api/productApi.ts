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
import { db } from "@/lib/firebase";
import { ProductType } from "@/types/types";

export const createProduct = async (
  payload: ProductType
): Promise<ProductType> => {
  try {
    //create product
    const productRef = await addDoc(collection(db, "products"), payload);

    //update product with unique id
    await updateDoc(productRef, {
      id: productRef?.id,
    });

    const productData = { ...payload, id: productRef?.id };
    return productData;
  } catch (error: any) {
    console.error("Error creating product:", error.message);
    throw error;
  }
};

export const getProductsByBusiness = async (
  businessId: string
): Promise<ProductType[]> => {
  try {
    const q = query(
      collection(db, "products"),
      where("businessId", "==", businessId)
    );
    const querySnapshot = await getDocs(q);

    const products: ProductType[] = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data() as ProductType; // Cast the data to Role type
      products.push(productData);
    });

    return products;
  } catch (error: any) {
    console.log("error getting products", error.message);
    throw error;
  }
};

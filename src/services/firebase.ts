import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCG-L8reMXHBs0fwexuarLUsnWcTgL3Qx8",
  authDomain: "wceipt.firebaseapp.com",
  projectId: "wceipt",
  storageBucket: "wceipt.appspot.com",
  messagingSenderId: "986221768619",
  appId: "1:986221768619:web:cc48b9dd9dbf8cb5302cee",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

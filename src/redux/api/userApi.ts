import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { SignUpUserType, UserType } from "@/types/types";
import { formatDate } from "@/utils";

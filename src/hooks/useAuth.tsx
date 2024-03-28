import { signOutUser } from "@/lib/api/authApi";
import { logUserOut } from "@/redux/slices/authSlice";
import { useAppDispatch } from ".";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuth() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  const [isUserValid, setIsUserValid] = useState(false);

  const logout = async () => {
    try {
      await signOutUser();
      dispatch(logUserOut());
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setIsUserValid(true);
        } else {
          console.log("no user found");
          router.push("/auth/login");
        }
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    });
  };

  return { logout, checkAuth, isUserValid, loading };
}

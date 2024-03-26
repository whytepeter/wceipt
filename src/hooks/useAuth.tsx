import { signOutUser } from "@/lib/api/authApi";
import { logUserOut } from "@/redux/slices/authSlice";
import { useAppDispatch } from ".";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await signOutUser();
      dispatch(logUserOut());
      router.push("/auth/login");
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return { logout };
}

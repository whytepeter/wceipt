"use client";
import Button from "@/components/Global/Button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkAuthState } from "@/libs/api/authApi";
import { useAppDispatch } from "@/hooks";
import { logUserOut } from "@/redux/slices/authSlice";

export default function Default() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = (route: string): void => {
    router.push(route);
  };

  useEffect(() => {
    (async function () {
      const user = checkAuthState();
      if (!user) {
        dispatch(logUserOut());
      }
    })();
  }, []);

  return (
    <>
      <div className=" flex flex-wrap gap-4 p-4 ">
        This is the Landing Page
        <Button
          onClick={() => {
            console.log("clicked");
            handleClick("/dashboard");
          }}
        >
          Dashboard
        </Button>
        <Button
          onClick={() => {
            console.log("clicked");
            handleClick("/auth/login");
          }}
        >
          Login
        </Button>
      </div>
    </>
  );
}

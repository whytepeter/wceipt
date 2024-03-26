"use client";
import SideBar from "@/components/Layout/Sidebar/SideBar";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks";
import NavBar from "@/components/Layout/Navbar/NavBar";
import { auth } from "@/libs/firebase";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "@/components/Global/Loader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const state = useAppSelector((state) => state.controller);
  const collapse = state.collapse;

  const [loading, setLoading] = useState(true);
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      onAuthStateChanged(auth, (user) => {
        try {
          if (user) {
            setIsUserValid(true);
            console.log("This is the logged in user", user);
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

    checkAuth();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center p-10">
        <Loader />
      </div>
    );

  if (isUserValid) {
    return (
      <main>
        <NavBar />
        <SideBar />

        <div
          className={`${
            collapse ? "md:pl-[60px]" : "sm:pl-[60px] md:pl-[230px]"
          }  pl-0 py-20 transition-all duration-300 text-dark-300 `}
        >
          <div className="px-4 md:px-8 ">{children}</div>
        </div>
      </main>
    );
  }
}

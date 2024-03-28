"use client";
import SideBar from "@/components/Layout/Sidebar/SideBar";
import React, { useEffect } from "react";
import { useAppSelector } from "@/hooks";
import NavBar from "@/components/Layout/Navbar/NavBar";

import Loader from "@/components/Global/Loader";
import useAuth from "@/hooks/useAuth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = useAppSelector((state) => state.controller);
  const collapse = state.collapse;

  const { checkAuth, isUserValid, loading } = useAuth();

  useEffect(() => {
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

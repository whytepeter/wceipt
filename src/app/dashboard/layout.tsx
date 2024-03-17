"use client";
import SideBar from "@/components/sidebar/SideBar";
import React from "react";
import { useAppSelector } from "@/hooks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = useAppSelector((state) => state.controller);
  const collapse = state.collapes;

  return (
    <main>
      <SideBar />
      <div
        className={`${
          collapse ? "md:pl-[60px]" : "sm:pl-[60px] md:pl-[230px]"
        } pl-0  transition-all duration-300`}
      >
        {children}
      </div>
    </main>
  );
}

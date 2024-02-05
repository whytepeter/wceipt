"use client";
import SideBar from "@/components/sidebar/SideBar";
import React from "react";
import { useAppSelector } from "@/hooks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = useAppSelector((state) => state.controllerReducer);
  const collapse = state.collapes;

  return (
    <main>
      <SideBar />
      <div
        className={`${
          collapse ? "sm:pl-[60px]" : "sm:pl-[60px] md:pl-[230px]"
        } pl-0`}
      >
        {children}
      </div>
    </main>
  );
}

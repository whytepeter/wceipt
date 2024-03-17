"use client";
import React from "react";
import { useAppSelector } from "@/hooks";

export default function Content({ children }: { children: React.ReactNode }) {
  const state = useAppSelector((state) => state.controller);
  const collapse = state.collapse;

  return (
    <div
      className={`${
        collapse ? "sm:pl-[60px]" : "sm:pl-[60px] md:pl-[230px]"
      } pl-0`}
    >
      {children}
    </div>
  );
}

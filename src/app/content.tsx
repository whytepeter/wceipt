"use client";
import React from "react";
import Button from "@/components/Global/Button";
import { useRouter } from "next/navigation";

export default function Content() {
  const router = useRouter();

  const handleClick = (route: string): void => {
    router.push(route);
  };

  return (
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
  );
}

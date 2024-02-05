"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/login");
  }, []);

  return <div></div>;
}

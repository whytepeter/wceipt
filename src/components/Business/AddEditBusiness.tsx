"use client";
import React from "react";
import BusinessForm from "@/components/Auth/BusinessForm";
import { useAppSelector } from "@/hooks";
import { UserType } from "@/types/types";
import { useRouter } from "next/navigation";
import useInitAccount from "@/hooks/useInitAccount";

type PropType = {
  type?: string;
};

export default function AddEditBusiness({ type = "add" }: PropType) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const { initBussiness } = useInitAccount();

  const userId = user?.userId;

  const onDone = async () => {
    await initBussiness(user!);
    router.push("/dashboard/business");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-2  md:p-6 my-6 md:my-0">
      <div className="bg-primary-100 px-4 py-3 text-primary rounded-t-xl flex items-center justify-between">
        <h4 className="font-medium text-lg">New Business</h4>
        <i
          onClick={handleBack}
          className="pi pi-times-circle text-primary text-lg cursor-pointer"
        />
      </div>
      <div className="px-4">
        <BusinessForm onDone={onDone} userId={userId!} />
      </div>
    </div>
  );
}

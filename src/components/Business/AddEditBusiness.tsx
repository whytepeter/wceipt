"use client";
import React, { useEffect, useMemo } from "react";
import BusinessForm from "@/components/Auth/BusinessForm";
import { useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";

type PropType = {
  edit?: boolean;
  businessId?: string;
};

export default function AddEditBusiness({
  edit = false,
  businessId,
}: PropType) {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const userId = user?.userId;

  // If edit get the business by id
  const state = useAppSelector((state) => state.data);
  const business = useMemo(() => {
    if (!edit || !businessId) return null;
    return state.business.find((el) => el.id === businessId);
  }, [edit]);

  const onDone = async () => {
    router.push("/dashboard/business");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full shadow-xl max-w-2xl mx-auto flex flex-col gap-2 my-6 pb-6 md:my-0 rounded-xl overflow-hidden">
      <div className="bg-primary-100 px-4 py-4 text-primary  flex items-center justify-between">
        <h4 className="font-medium text-lg">
          {edit ? "Update" : "New"} Business
        </h4>
        <i
          onClick={handleBack}
          className="pi pi-times-circle text-primary text-lg cursor-pointer"
        />
      </div>
      <div className="px-4 md:px-6">
        <BusinessForm business={business} onDone={onDone} userId={userId!} />
      </div>
    </div>
  );
}

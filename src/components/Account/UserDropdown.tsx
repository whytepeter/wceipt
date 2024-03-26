import { useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import React from "react";

export default function UserDropdown() {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/dashboard/settings");
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-2 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-primary-100 border border-primary-200 flex-shrink-0"></div>
      <div className="text-dark-300 flex  items-center gap-2">
        <span className="text-sm">{user?.full_name || "N/A"}</span>
        <span className="text-[0.65rem] capitalize font-medium text-primary bg-primary-100 px-1.5 py-0.5 w-fit rounded-md">
          {user?.roleDetails?.name} ⚙️
        </span>

        <i className="pi pi-chevron-right text-xs text-primary-200" />
      </div>
    </div>
  );
}

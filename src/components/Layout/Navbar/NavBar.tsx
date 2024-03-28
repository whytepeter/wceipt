import React from "react";
import { useAppSelector } from "@/hooks";
import UserDropdown from "../../Account/UserDropdown";
import Notification from "@/components/Notification/Notification";
import ActiveOrganization from "@/components/Layout/Sidebar/ActiveOrganization";
import ActionButton from "./ActionButton";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const { collapse } = useAppSelector((state) => state.controller);
  const currentPage = pathname.split("/")[2] || "Dashboard";

  return (
    <div
      className={`${
        collapse ? "md:pl-[60px]" : "sm:pl-[60px] md:pl-[230px]"
      } absolute left-0 top-0 w-full   text-sm transition-all duration-300`}
    >
      <nav className="px-4 py-2.5 sm:px-8 flex items-center justify-between bg-white border-b border-outline">
        <div className="hidden md:block text-primary uppercase ">
          {currentPage}
        </div>

        <div className=" md:hidden">
          <ActiveOrganization className="border-primary-200 text-primary" />
        </div>

        <div className="flex items-center divider-x-dark-100 gap-5">
          <ActionButton />
          <Notification />

          <div className="hidden md:block">
            <UserDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import MenuItems from "@/components/sidebar/MenuItems";
import Button from "@/components/global/Button";
import ActiveOrganization from "@/components/sidebar/ActiveOrganization";

import { MenuItemsType } from "@/interfaces/types";

import { MdSpaceDashboard } from "react-icons/md";
import { IoReceiptSharp, IoSettingsSharp } from "react-icons/io5";
import { FaUserGroup, FaChartBar, FaBox } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";

const menuItems: MenuItemsType[] = [
  {
    href: "/",
    title: "Dashboard",
    icon: <MdSpaceDashboard size={20} />,
  },
  {
    href: "/dashboard/products",
    title: "Products",
    icon: <FaBox size={20} />,
  },
  {
    href: "/dashboard/receipts",
    title: "Receipts",
    icon: <IoReceiptSharp size={20} />,
  },
  {
    href: "/dashboard/customers",
    title: "Customers",
    icon: <FaUserGroup size={20} />,
  },
  {
    href: "/dashboard/reports",
    title: "Reports",
    icon: <FaChartBar size={20} />,
  },
  {
    href: "/dashboard/settings",
    title: "Settings",
    icon: <IoSettingsSharp size={20} />,
  },
];

export default function SideBar() {
  // Ovie, please make this a global property using the redux and add a toggle
  const [min, setMin] = useState(false);

  return (
    <>
      <div
        className={`
       ${min ? "w-[60px]" : "w-[60px] md:w-[230px]"}
       fixed h-screen  bg-primary  z-20 p-4 py-6 flex flex-col justify-between 
       `}
      >
        <div className={`flex flex-col gap-5`}>
          {!min && <ActiveOrganization />}

          <div className="flex flex-col gap-7 ">
            {menuItems.map((menu) => (
              <MenuItems menu={menu} key={menu.title} />
            ))}
          </div>
        </div>

        <div className="hidden md:flex">
          <Button block color="accent" className="text-primary gap-2 flex">
            <BiLogOutCircle size={22} />
            Logout
          </Button>
        </div>
        <div className="md:hidden">
          <BiLogOutCircle className="text-accent" size={22} />
        </div>
      </div>
    </>
  );
}

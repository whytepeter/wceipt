"use client";

import React, { useEffect, useState } from "react";
import MenuItems from "@/components/sidebar/MenuItems";
import Button from "@/components/global/Button";
import ActiveOrganization from "@/components/sidebar/ActiveOrganization";

import { MenuItemsType } from "@/interfaces/types";

import { MdSpaceDashboard } from "react-icons/md";
import { IoReceiptSharp, IoSettingsSharp } from "react-icons/io5";
import {
  FaUserGroup,
  FaChartBar,
  FaBox,
  FaChevronRight,
} from "react-icons/fa6";
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
        className={`${
          min ? "sm:w-[60px]" : "sm:w-[60px] md:w-[230px]"
        } w-full h-auto fixed left-0 bottom-0 sm:top-0 sm:h-screen transition-all duration-75 z-20`}
      >
        <div
          className={`${
            min ? "p-0" : "p-4"
          } h-full w-full relative bg-primary   py-6 flex sm:flex-col justify-between`}
        >
          {/* //Collapse button // */}
          <div
            onClick={() => setMin((prev) => !prev)}
            className="hidden sm:flex absolute  cursor-pointer top-1/2 -translate-y-1/2 -right-3 w-7 h-7  items-center justify-center border bg-white/50 backdrop-blur-sm border-primary px-2 py-1 rounded-full"
          >
            <FaChevronRight
              size={16}
              className={`transition-all duration-300 text-primary ${
                min ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          {/* //Change Organization  // */}
          <div
            className={`${
              min ? "sm:items-center" : ""
            } flex flex-col  w-full gap-5`}
          >
            {!min ? (
              <ActiveOrganization />
            ) : (
              <div className="hidden sm:flex h-10 w-10  text-xl items-center justify-center  rounded-xl bg-accent text-primary font-light">
                w
              </div>
            )}

            {/* //Menu Links // */}
            <div
              className={` ${
                min ? "sm:items-center" : ""
              } flex sm:flex-col justify-evenly  sm:justify-start gap-7 sm:gap-8 `}
            >
              {menuItems.map((menu) => (
                <MenuItems min={min} menu={menu} key={menu.title} />
              ))}
            </div>
          </div>

          {/* //Logout button // */}
          <div className={`${min ? "hidden" : "hidden md:flex items-center"}`}>
            <Button block color="accent" className="text-primary gap-2 flex">
              <BiLogOutCircle size={22} />
              Logout
            </Button>
          </div>

          {min && (
            <div className="hidden sm:flex justify-center">
              <BiLogOutCircle className="text-accent" size={22} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

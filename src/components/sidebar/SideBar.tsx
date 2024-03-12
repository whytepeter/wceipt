"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { toggleCollapes } from "@/redux/slices/controllerSlice";

import MenuItems from "@/components/sidebar/MenuItems";
import Button from "@/components/global/Button";
import ActiveOrganization from "@/components/sidebar/ActiveOrganization";

import { MenuItemsType } from "@/types/types";

import { MdSpaceDashboard } from "react-icons/md";
import { IoReceiptSharp, IoSettingsSharp } from "react-icons/io5";
import {
  FaUserGroup,
  FaChartBar,
  FaBox,
  FaChevronRight,
} from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

const menuItems: MenuItemsType[] = [
  {
    href: "/dashboard",
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
  const router = useRouter();
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.controller);
  const collapse = state.collapes;

  const handleCollapseClick = (): void => {
    dispatch(toggleCollapes(!collapse));
  };

  const handleLogout = (): void => {
    router.push("/auth/login");
  };

  return (
    <>
      <div
        className={`${
          collapse ? "sm:w-[60px]" : "sm:w-[60px] md:w-[230px]"
        } w-full h-auto fixed left-0 bottom-0 sm:top-0 sm:h-screen transition-all duration-300 z-20`}
      >
        <div
          className={`${
            collapse ? "p-0" : "p-4"
          } h-full w-full relative bg-primary   py-6 flex sm:flex-col justify-between`}
        >
          {/* //Collapse button // */}
          <div
            onClick={handleCollapseClick}
            className="hidden sm:flex absolute  cursor-pointer top-1/2 -translate-y-1/2 -right-3 w-7 h-7  items-center justify-center border bg-white/50 backdrop-blur-sm border-primary px-2 py-1 rounded-full"
          >
            <FaChevronRight
              size={16}
              className={`transition-all duration-300 text-primary ${
                collapse ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          {/* //Change Organization  // */}
          <div
            className={`${
              collapse ? "sm:items-center" : ""
            } flex flex-col  w-full gap-5`}
          >
            {!collapse ? (
              <ActiveOrganization />
            ) : (
              <div className="hidden sm:flex h-10 w-10  text-xl items-center justify-center  rounded-xl bg-accent text-primary font-light">
                w
              </div>
            )}

            {/* //Menu Links // */}
            <div
              className={` ${
                collapse ? "sm:items-center" : ""
              } flex sm:flex-col justify-evenly  sm:justify-start gap-7 sm:gap-8 `}
            >
              {menuItems.map((menu) => (
                <MenuItems min={collapse} menu={menu} key={menu.title} />
              ))}
            </div>
          </div>

          {/* //Logout button // */}
          <div
            onClick={handleLogout}
            className={`${
              collapse ? "hidden" : "hidden md:flex  items-center"
            }`}
          >
            <Button block color="accent" className="text-primary  gap-2 flex">
              <BiLogOutCircle size={22} />
              Logout
            </Button>
          </div>

          {collapse && (
            <div
              onClick={handleLogout}
              className="hidden sm:flex justify-center"
            >
              <BiLogOutCircle className="text-accent" size={22} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

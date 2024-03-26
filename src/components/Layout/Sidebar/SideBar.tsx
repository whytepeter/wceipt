"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { togglecollapse } from "@/redux/slices/controllerSlice";
import { logUserOut } from "@/redux/slices/authSlice";

import MenuItems from "@/components/Layout/Sidebar/MenuItems";
import Button from "@/components/Global/Button";
import ActiveOrganization from "@/components/Layout/Sidebar/ActiveOrganization";

import { MenuItemsType } from "@/types/types";

import Logo from "@/components/Global/Logo";
import { MdSpaceDashboard } from "react-icons/md";
import { IoReceiptSharp, IoSettingsSharp } from "react-icons/io5";
import {
  FaUserGroup,
  FaChartBar,
  FaBox,
  FaChevronRight,
} from "react-icons/fa6";
import { RiHomeFill } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

import MoreDrawer from "./MoreDrawer";
import useAuth from "@/hooks/useAuth";

const menuItems: MenuItemsType[] = [
  {
    href: "/dashboard",
    title: "Home",
    icon: <RiHomeFill size={18} />,
    desktop: true,
    mobile: true,
  },
  {
    href: "/dashboard/products",
    title: "Products",
    icon: <FaBox size={18} />,
    desktop: true,
    mobile: true,
  },
  {
    href: "/dashboard/sales",
    title: "Sales",
    icon: <FaChartBar size={18} />,
    desktop: true,
    mobile: true,
  },
  {
    href: "/dashboard/receipts",
    title: "Receipts",
    icon: <IoReceiptSharp size={18} />,
    desktop: true,
  },
  {
    href: "/dashboard/customers",
    title: "Customers",
    icon: <FaUserGroup size={18} />,
    desktop: true,
  },

  {
    href: "/dashboard/settings",
    title: "Settings",
    icon: <IoSettingsSharp size={18} />,
    desktop: true,
  },
  {
    href: "",
    title: "More",
    icon: <MdSpaceDashboard size={18} />,
    mobile: true,
  },
];

export default function SideBar() {
  const dispatch = useAppDispatch();
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  const state = useAppSelector((state) => state.controller);
  const collapse = state.collapse;

  const handleCollapseClick = (): void => {
    dispatch(togglecollapse(!collapse));
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleClick = (menu: MenuItemsType) => {
    if (menu.title == "More") {
      setOpen(true);
    }
  };

  return (
    <>
      <div
        className={`${
          collapse ? "md:w-[60px]" : "sm:w-[60px] md:w-[230px]"
        } w-full h-auto fixed left-0 bottom-0 md:top-0 md:h-screen transition-all duration-300 z-20`}
      >
        <div
          className={`${
            collapse ? "p-0" : "p-4"
          } h-full w-full relative bg-primary py-2.5  md:py-6 flex md:flex-col justify-between`}
        >
          {/* //Collapse button // */}
          <div
            onClick={handleCollapseClick}
            className="hidden md:flex absolute  cursor-pointer top-1/2 -translate-y-1/2 -right-3 w-7 h-7  items-center justify-center border bg-white/50 backdrop-blur-sm border-primary px-2 py-1 rounded-full"
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
              collapse ? "md:items-center" : ""
            } flex flex-col  w-full gap-5`}
          >
            {!collapse ? (
              <div className="hidden md:block">
                <ActiveOrganization />
              </div>
            ) : (
              <div className="hidden md:flex ">
                <Logo />
              </div>
            )}

            {/* //Desktop Links // */}
            <div
              className={`${
                collapse ? "items-center" : ""
              } hidden md:flex flex-col justify-start gap-8 `}
            >
              {menuItems.map(
                (menu) =>
                  menu.desktop && (
                    <MenuItems key={menu.title} min={collapse} menu={menu} />
                  )
              )}
            </div>
            {/* //// Mobile ///// */}
            <div
              className={` ${
                collapse ? "md:items-center" : ""
              } flex md:hidden  justify-evenly  gap-7  `}
            >
              {menuItems.map(
                (menu) =>
                  menu.mobile && (
                    <MenuItems
                      onClick={() => {
                        handleClick(menu);
                      }}
                      min={collapse}
                      menu={menu}
                      key={menu.title}
                    />
                  )
              )}
            </div>
          </div>

          {/* //Logout button // */}
          <div
            onClick={handleLogout}
            className={`${
              collapse ? "hidden" : "hidden md:flex  items-center"
            }`}
          >
            <Button block color="accent">
              <div className="text-primary  gap-2 flex">
                <BiLogOutCircle size={22} />
                Logout
              </div>
            </Button>
          </div>

          {collapse && (
            <div
              onClick={handleLogout}
              className="hidden cursor-pointer md:flex justify-center"
            >
              <BiLogOutCircle className="text-accent" size={22} />
            </div>
          )}
        </div>
      </div>

      <MoreDrawer open={open} setOpen={setOpen} />
    </>
  );
}

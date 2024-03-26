"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItemsType } from "@/types/types";
import { setCurrentPage } from "@/redux/slices/controllerSlice";
import { useAppDispatch } from "@/hooks";

interface MenuType {
  menu: MenuItemsType;
  min?: boolean;
  list?: boolean;
  onClick?: () => void;
}

export default function MenuItems({
  menu,
  min,
  onClick,
  list = false,
}: MenuType) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    return pathname == href;
  };

  useEffect(() => {
    if (pathname == menu.href) {
      dispatch(setCurrentPage(menu.title));
    }
  }, [pathname]);

  return (
    <Link onClick={onClick} href={menu.href} key={menu.title}>
      {list ? (
        <div className="w-full  p-4 flex items-center justify-between gap-2 border-b border-outline last:borderb-none">
          <div
            key={menu.title}
            className=" flex items-center gap-4 text-primary"
          >
            <span className="w-10 h-10 rounded-full border flex items-center justify-center text-primary-200">
              {menu.icon}
            </span>
            <span className="text-sm  tracking-widest">{menu.title}</span>
          </div>
          <i className="pi pi-chevron-right text-sm text-dark-100" />
        </div>
      ) : (
        <div
          className={`
      ${isActive(menu.href) ? "text-accent" : "text-white font-light"}
      hover:text-accent flex flex-col md:flex-row justify-center md:justify-start items-center gap-1.5 md:gap-3
      `}
        >
          {menu.icon}

          <span
            className={`${
              min ? "md:hidden" : ""
            } text-[0.65rem] sm:text-xs  tracking-widest`}
          >
            {menu.title}
          </span>
        </div>
      )}
    </Link>
  );
}

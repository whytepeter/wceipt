"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItemsType } from "@/types/types";
import { setCurrentPage } from "@/redux/slices/controllerSlice";
import { useAppDispatch } from "@/hooks";

interface MenuType {
  menu: MenuItemsType;
  min: boolean;
}

export default function MenuItems({ menu, min }: MenuType) {
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
    <Link href={menu.href} key={menu.title}>
      <div
        className={`
      ${isActive(menu.href) ? "text-accent" : "text-white font-light"}
      hover:text-accent flex flex-col md:flex-row justify-center md:justify-start items-center gap-1.5 md:gap-3
      `}
      >
        {menu.icon}

        <span className={`${min ? "md:hidden" : ""} text-xs  tracking-widest`}>
          {menu.title}
        </span>
      </div>
    </Link>
  );
}

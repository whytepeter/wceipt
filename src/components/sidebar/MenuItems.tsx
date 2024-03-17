"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItemsType } from "@/types/types";

interface MenuType {
  menu: MenuItemsType;
  min: boolean;
}

export default function MenuItems({ menu, min }: MenuType) {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    return pathname == href;
  };

  return (
    <Link href={menu.href} key={menu.title}>
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
          } text-xs md:text-sm tracking-widest`}
        >
          {menu.title}
        </span>
      </div>
    </Link>
  );
}

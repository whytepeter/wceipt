"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItemsType } from "@/types/types";

interface MenuType {
  menu: MenuItemsType;
  min?: boolean;
  onClick?: () => void;
}

export default function MenuItems({ menu, min, onClick }: MenuType) {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    return pathname == href;
  };

  return (
    <Link onClick={onClick} href={menu.href}>
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
    </Link>
  );
}

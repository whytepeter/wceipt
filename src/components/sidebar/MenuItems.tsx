"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItemsType } from "@/interfaces/types";

export default function MenuItems({ menu }: { menu: MenuItemsType }) {
  const pathname = usePathname();
  const isActive = (href: string): boolean => {
    return pathname == href;
  };

  return (
    <Link href={menu.href} key={menu.title}>
      <div
        className={`
      ${isActive(menu.href) ? "text-accent" : "text-white font-light"}
      hover:text-accent flex justify-center md:justify-start items-center gap-2
      `}
      >
        {menu.icon}
        <span className="text-sm hidden md:block  tracking-widest  ">
          {menu.title}
        </span>
      </div>
    </Link>
  );
}

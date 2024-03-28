import { ListType } from "@/types/types";
import Link from "next/link";
import React from "react";

export default function ListCard({ item, onClick }: ListType) {
  const { title, description, icon, href = "" } = item;
  return (
    <Link onClick={onClick} href={href}>
      <div className="w-full  p-4 flex items-center justify-between gap-2 ">
        <div key={title} className=" flex items-center gap-4 text-primary">
          <span className="w-10 h-10 rounded-full border flex items-center justify-center text-primary-200">
            {icon}
          </span>
          <span className="text-sm  tracking-widest">{title}</span>
        </div>
        <i className="pi pi-chevron-right text-sm text-dark-100" />
      </div>
    </Link>
  );
}

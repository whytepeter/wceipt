import React from "react";
import wave from "@/assets/icons/wave.svg";
import Image from "next/image";
import { InfoCardProps } from "@/types/types";

export default function InfoCard({
  title = "Title",
  value,
  plain,
  body,
}: InfoCardProps) {
  return (
    <div
      className={`${
        plain
          ? "bg-white border-outline text-dark-300"
          : "text-primary border-primary-200 bg-primary-100"
      } px-3 sm:px-4 p-4 rounded-xl border overflow-hidden`}
    >
      <div>
        <div className="flex items-center">
          <span className="text-xs font-normal flex-grow whitespace-nowrap">
            {title}
          </span>
          <Image src={wave} alt="" className="-mt-2" />
        </div>
      </div>
      {body ? body : <div className="font-semibold">{value}</div>}
    </div>
  );
}

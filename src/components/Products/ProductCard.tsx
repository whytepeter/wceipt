import { formatAmount, formatDate } from "@/utils";
import React from "react";

export default function ProductCard() {
  return (
    <div className="cursor-pointer w-full flex  justify-between gap-2 text-sm text-dark-400">
      <div className="flex items-center gap-2">
        <div className="h-16 w-16 flex-shrink-0 bg-background rounded-xl"></div>
        <div className="flex flex-col  ">
          <span className="text-sm  line-clamp-1 ">Mack Book Pro</span>
          <span className="text-xs line-clamp-2 text-dark-200 font-light">
            This is a mac book pro m2
          </span>
          <span className="text-xs text-dark-100 font-light">2 item(s)</span>
        </div>
      </div>
      <div className=" text-right  flex flex-col ">
        <span className="font-semibold text-primary-200">
          {" "}
          {formatAmount(10000)}{" "}
        </span>
        <span className="text-[0.65rem] text-dark-200 font-light">
          {formatDate(new Date())}
        </span>
      </div>
    </div>
  );
}

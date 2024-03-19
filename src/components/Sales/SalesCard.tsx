import { formatAmount, formatDate } from "@/utils";
import React from "react";

export default function SalesCard() {
  return (
    <div className="cursor-pointer w-full flex items-center justify-between gap-2 text-sm text-dark-400">
      <div className="flex items-center gap-3">
        <div className="relative h-16 w-16">
          <div className="h-16 w-16 flex-shrink-0 bg-background border border-outline rounded-xl absolute left-0 "></div>
          <div className="h-14 w-14 flex-shrink-0 bg-background border border-outline rounded-xl absolute left-2 top-1 "></div>
          <div className="h-12 w-12 flex-shrink-0 bg-background border border-outline rounded-xl absolute left-5 top-2 "></div>
        </div>
        <div className="flex flex-col  ">
          <span className="text-sm  line-clamp-1 ">#001</span>
          <span className="text-xs line-clamp-2 text-dark-300 font-light">
            Mac book prop, iphone 14 pro, series ultra
          </span>
          <span className="text-xs text-dark-100 font-light">3 item(s)</span>
        </div>
      </div>
      <div className=" text-right  flex flex-col ">
        <span className="font-semibold text-primary-200">
          {formatAmount(20000)}
        </span>
        <span className="text-[0.65rem] text-dark-200 font-light">
          {formatDate(new Date())}
        </span>
      </div>
    </div>
  );
}

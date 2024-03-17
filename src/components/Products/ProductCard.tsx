import React from "react";

export default function ProductCard() {
  return (
    <div className="cursor-pointer  flex items-center justify-between gap-2 text-sm text-dark-400">
      <div className="flex items-center gap-2">
        <div className="h-16 w-16 flex-shrink-0 bg-background rounded-xl"></div>
        <div className="flex flex-col gap-1 ">
          <span className="text-sm  ">Mack Book Pro</span>
          <span className="text-xs text-dark-200 font-light">
            This is a mac book pro m2
          </span>
        </div>
      </div>
      <div className="font-semibold text-primary">1</div>
    </div>
  );
}

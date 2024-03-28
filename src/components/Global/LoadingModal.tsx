import React from "react";
import Loader from "./Loader";

type PropType = {
  text?: string;
};

export default function LoadingModal({ text }: PropType) {
  return (
    <div className="fixed z-50 inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader />
        {text && (
          <span className="text-xs md:text-sm text-primary">{text}</span>
        )}
      </div>
    </div>
  );
}

import { classNames } from "primereact/utils";
import React from "react";

type CardProps = {
  children?: React.ReactNode;
  title?: string;
  leftArea?: React.ReactNode;
  className?: string;
};

export default function Card({ children, title, leftArea }: CardProps) {
  const showHeading = !!title || !!leftArea;
  return (
    <div
      className={`h-auto bg-white border border-outline rounded-2xl p-4 flex flex-col gap-3`}
    >
      {showHeading && (
        <div className="flex items-center justify-between gap-4 bg-white">
          <h3 className=" text-base font-normal text-dark-300">{title}</h3>
          <div>{leftArea}</div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}

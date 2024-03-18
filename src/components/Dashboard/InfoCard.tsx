import React from "react";

type InfoCardProps = {
  title: string;
  value: string | number;
  plain?: boolean;
  body?: React.ReactNode;
};

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
      } px-3 sm:px-4 p-4 rounded-xl border `}
    >
      <div>
        <span className="text-xs font-normal">{title}</span>
      </div>
      {body ? body : <div className="font-semibold">{value}</div>}
    </div>
  );
}

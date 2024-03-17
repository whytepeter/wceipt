import React from "react";

type InfoCardProps = {
  title: string;
  value: string | number;
  plain?: boolean;
  color?: string;
};

export default function InfoCard({
  title = "Title",
  value,
  plain,
  color,
}: InfoCardProps) {
  return (
    <div
      className={`${
        plain
          ? "bg-white border-outline text-dark-300"
          : "text-primary border-primary-200 bg-primary-100"
      } p-4 rounded-xl border `}
    >
      <div>
        <span className="text-xs font-normal">{title}</span>
      </div>
      <div className={`${color} font-semibold`}>{value}</div>
    </div>
  );
}

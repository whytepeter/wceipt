import React from "react";
import { VscBell } from "react-icons/vsc";

export default function Notification() {
  const isNotification = true;

  return (
    <div className="">
      <div className="relative cursor-pointer">
        <VscBell size={20} className="text-dark-300" />

        {isNotification && (
          <i className="pi pi-circle-fill text-[.5rem] text-primary-200 absolute right-0 top-0 " />
        )}
      </div>
    </div>
  );
}

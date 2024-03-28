import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import Button from "@/components/Global/Button";
import UserDropdown from "@/components/Account/UserDropdown";
import { BiLogOutCircle } from "react-icons/bi";
import { IoReceiptSharp, IoSettingsSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { MenuItemsType } from "@/types/types";
import MenuItems from "./MenuItems";
import useAuth from "@/hooks/useAuth";
import ListItem from "@/components/Global/ListItem";

type MoreProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const menuItems: MenuItemsType[] = [
  {
    href: "/dashboard/receipts",
    title: "Receipts",
    icon: <IoReceiptSharp size={18} />,
  },
  {
    href: "/dashboard/customers",
    title: "Customers",
    icon: <FaUserGroup size={18} />,
  },

  {
    href: "/dashboard/settings",
    title: "Settings",
    icon: <IoSettingsSharp size={18} />,
  },
];

export default function MoreDrawer({ open, setOpen }: MoreProps) {
  const { logout } = useAuth();

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="">
        <DrawerHeader className="text-left">
          <div className="pointer-events-none">
            <UserDropdown />
          </div>
        </DrawerHeader>

        <div className="flex flex-col justify-start  mb-4 ">
          {menuItems.map((menu) => (
            <ListItem
              item={menu}
              onClick={() => {
                setOpen(false);
              }}
              key={menu.title}
            />
          ))}
        </div>

        <DrawerFooter className="pt-2 mb-4">
          <DrawerClose asChild>
            <Button onClick={logout} block color="accent">
              <div className="text-primary  gap-2 flex">
                <BiLogOutCircle size={22} />
                Logout
              </div>
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

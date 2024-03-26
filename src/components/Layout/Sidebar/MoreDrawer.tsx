import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "@/components/Global/Button";

type MoreProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export default function MoreDrawer({ open, setOpen }: MoreProps) {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className=" h-[80%]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant="outline"
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

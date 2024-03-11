import React, { useEffect, useState } from "react";
import SelectInput from "@/components/global/SelectInput";
import { SelectOptionType } from "@/types/types";
import { useAppSelector } from "@/hooks";
import Button from "../global/Button";
import { FaPlus } from "react-icons/fa6";

export default function ActiveOrganization() {
  const [activeBusinessID, setActiveBusinessID] = useState("");
  const [businessOptions, setbusinessOptions] = useState<
    SelectOptionType[] | null
  >(null);

  const state = useAppSelector((state) => state.data);
  const businesses = state.business;
  const activeBusiness = state.activeBusiness || businesses[0];

  useEffect(() => {
    const options = businesses.map((el) => {
      return {
        label: el.name,
        value: el.id,
      };
    });
    setbusinessOptions(options);
    setActiveBusinessID(activeBusiness?.id);
  }, [businesses]);

  const switchBusiness = (val: string): void => {
    //Do some actions here
    setActiveBusinessID(val);
  };

  return (
    <div className="hidden md:block w-full">
      <SelectInput
        onSelect={switchBusiness}
        value={activeBusinessID}
        options={businessOptions}
        styles={{
          backgroundColor: "transparent",
          borderColor: "#F4D690",
          color: "#F4D690",
        }}
        action={
          <Button
            variant="text"
            block
            className="flex text-sm items-center justify-center gap-2"
          >
            New Business
            <FaPlus className="text-primary" />
          </Button>
        }
      />
    </div>
  );
}

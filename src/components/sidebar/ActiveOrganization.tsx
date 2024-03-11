import React, { useEffect, useState } from "react";
import SelectInput from "@/components/global/SelectInput";
import { SelectOptionType } from "@/types/types";
import { useAppSelector } from "@/hooks";

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
      />
    </div>
  );
}

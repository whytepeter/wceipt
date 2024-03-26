import React, { useEffect, useState } from "react";
import SelectInput from "@/components/Global/SelectInput";
import { SelectOptionType } from "@/types/types";
import { useAppSelector } from "@/hooks";
import Button from "../../Global/Button";
import { FaPlus } from "react-icons/fa6";

type PropsType = {
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
};

export default function ActiveOrganization({
  borderColor = "#F4D690",
  backgroundColor = "transparent",
  color = "#F4D690",
}: PropsType) {
  const [activeBusinessID, setActiveBusinessID] = useState("");
  const [businessOptions, setbusinessOptions] = useState<
    SelectOptionType[] | null
  >(null);

  const { user } = useAppSelector((state) => state.auth);
  const isAdmin =
    user?.roleDetails?.name === "Admin" || user?.roleDetails?.name === "User";

  const state = useAppSelector((state) => state.data);
  const business = state.business;
  const activeBusiness = state.activeBusiness || business[0];

  useEffect(() => {
    const options = business.map((el) => {
      return {
        label: el.name,
        value: el.id,
      };
    });
    setbusinessOptions(options);
    setActiveBusinessID(activeBusiness?.id);
  }, [business]);

  const switchBusiness = (val: string): void => {
    //Do some actions here
    setActiveBusinessID(val);
  };

  return (
    <div className="">
      <SelectInput
        onSelect={switchBusiness}
        value={activeBusinessID}
        options={businessOptions}
        disabled={!isAdmin}
        styles={{
          backgroundColor,
          borderColor,
          color,
        }}
        action={
          <Button variant="text" block>
            <div className="flex text-sm items-center justify-center gap-2">
              New Business
              <FaPlus className="text-primary" />
            </div>
          </Button>
        }
      />
    </div>
  );
}

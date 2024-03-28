import React, { useEffect, useMemo, useState } from "react";
import SelectInput from "@/components/Global/SelectInput";
import { SelectOptionType } from "@/types/types";
import { useAppSelector } from "@/hooks";
import Button from "../../Global/Button";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

type PropsType = {
  className?: string;
};

export default function ActiveOrganization({ className }: PropsType) {
  const router = useRouter();
  const [activeBusinessID, setActiveBusinessID] = useState("");

  const { user } = useAppSelector((state) => state.auth);
  const isStaff = user?.roleDetails?.name === "Staff";

  const { business, activeBusiness } = useAppSelector((state) => state.data);

  const businessOptions: SelectOptionType[] = useMemo(
    () =>
      business.map((el) => {
        return {
          label: el.name,
          value: el.id,
        };
      }),
    [business]
  );

  useEffect(() => {
    // console.log(activeBusiness);
    setActiveBusinessID(activeBusiness?.id || business[0]?.id);
  }, [activeBusiness]);

  const switchBusiness = (val: string): void => {
    //Do some actions here
    setActiveBusinessID(val);
  };

  const handleAddBusiness = () => {
    router.push("/dashboard/business/new");
  };

  const classStyle = cn("bg-transparent text-accent border-accent", className);

  return (
    <div className="">
      <SelectInput
        onSelect={switchBusiness}
        value={activeBusinessID}
        options={businessOptions}
        disabled={isStaff}
        className={classStyle}
        action={
          <Button onClick={handleAddBusiness} variant="text" block>
            <div className="flex text-xs md:text-sm items-center justify-center gap-2">
              New Business
              <FaPlus className="text-primary" />
            </div>
          </Button>
        }
      />
    </div>
  );
}

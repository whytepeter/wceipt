import React, { useEffect, useMemo, useState } from "react";
import SelectInput from "@/components/Global/SelectInput";
import { SelectOptionType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Button from "../../Global/Button";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import useInitAccount from "@/hooks/useInitAccount";
import { setDataState } from "@/redux/slices/dataSlice";
import LoadingModal from "@/components/Global/LoadingModal";
import toast from "react-hot-toast";

type PropsType = {
  className?: string;
};

export default function ActiveOrganization({ className }: PropsType) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { initProducts, initSales, initStaffs, initCustomer } =
    useInitAccount();

  const [loading, setLoading] = useState(false);

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

  const switchBusiness = async (businessId: string): Promise<void> => {
    //if id is already active do nothing
    if (businessId === activeBusiness) return;
    try {
      setLoading(true);
      //swtich businesss
      await initProducts(businessId);
      await initSales(businessId);
      await initSales(businessId);
      await initStaffs(businessId);
      await initCustomer(businessId);

      dispatch(setDataState({ field: "activeBusiness", value: businessId }));
      toast.success("Business successfully switched");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBusiness = () => {
    router.push("/dashboard/business/new");
  };

  const classStyle = cn("bg-transparent text-accent border-accent", className);

  return (
    <>
      <div className="">
        <SelectInput
          onSelect={switchBusiness}
          value={activeBusiness}
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

      {loading && <LoadingModal text="Switching business..." />}
    </>
  );
}

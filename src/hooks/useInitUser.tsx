import React, { useEffect } from "react";
import { useAppDispatch } from ".";
import { BusinessType, UserType } from "@/types/types";
import { setDataState } from "@/redux/slices/dataSlice";
import { getBusinessByID, getBusinessByUserID } from "@/redux/api/businessApi";
import toast from "react-hot-toast";

export default function useInitUser(user: UserType) {
  const dispatch = useAppDispatch();
  const init = async () => {
    try {
      console.log("initing...");
      let businesses: BusinessType[] = [];
      const roleName = user?.roleDetails?.name;
      if (roleName === "Staff") {
        //Get business attached to the loggedin staff

        if (!user?.business) {
          toast.error("You don't have any business, please contact admin");
          return;
        }
        const res = await getBusinessByID(user?.business);
        if (!res) {
          toast.error("Your business no longer exist, please contact admin");
          return;
        }
        businesses = [res];
      } else {
        //Get All business
        businesses = await getBusinessByUserID(user?.userId);
      }
      dispatch(setDataState({ field: "business", value: businesses }));
      dispatch(setDataState({ field: "activeBusiness", value: businesses[0] }));

      //Get All Business

      console.log(businesses);
      //Get all products By business
      //Get all receipts by business
      //Get all customers by business

      //Get all staff by business
    } catch (error: any) {
      console.log("error initing user", error.message);
      throw error;
    }
  };

  init();
}

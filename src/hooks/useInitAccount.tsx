import { getBusinessByID, getBusinessByUserID } from "@/libs/api/businessApi";
import { getProductsByBusiness } from "@/libs/api/productApi";
import { BusinessType, UserType } from "@/types/types";
import toast from "react-hot-toast";
import { useAppDispatch } from ".";
import { setDataState } from "@/redux/slices/dataSlice";
import { useRouter } from "next/navigation";
import { getSalesByBusiness } from "@/libs/api/salesApi";
import { getCustomersByBusiness } from "@/libs/api/customerApi";

export default function useInitAccount() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const initAccount = async (user: UserType) => {
    try {
      let businesses: BusinessType[] = [];
      const roleName = user?.roleDetails?.name;
      const roleId = user?.roleDetails?.id;
      const userId = user?.userId;

      //Check if the user is a Staff
      if (roleName === "Staff") {
        if (!user?.business) {
          toast.error("You don't have any business, please contact admin");
          return;
        }

        //Get business attached to the loggedin staff

        const res = await getBusinessByID(user?.business);
        if (!res) {
          toast.error("Your business no longer exist, please contact admin");
          return;
        }
        businesses = [res];
      } else {
        //Get All business
        businesses = await getBusinessByUserID(userId);

        //If the user has not business yet, redirected them to the business page
        if (!businesses?.length) {
          router.replace(`/auth/business?userId=${userId}`);
        }
      }

      const activeBusiness = businesses[0];
      const bussnessId = activeBusiness?.id;

      dispatch(setDataState({ field: "business", value: businesses }));
      dispatch(
        setDataState({ field: "activeBusiness", value: activeBusiness })
      );

      console.log("Business", businesses);

      //Get all products By active business
      const products = await getProductsByBusiness(bussnessId);
      dispatch(setDataState({ field: "products", value: products }));
      console.log("Products", products);

      //Get all receipts by active business
      const sales = await getSalesByBusiness(bussnessId);
      dispatch(setDataState({ field: "sales", value: sales }));
      console.log("Sales", sales);

      //Get all customers by active business
      const customers = await getCustomersByBusiness(bussnessId);
      dispatch(setDataState({ field: "customers", value: customers }));
      console.log("customers", customers);

      //Get all staff by business
      const staffs = await getSalesByBusiness(bussnessId, roleId);
      dispatch(setDataState({ field: "staffs", value: staffs }));
      console.log("staffs", staffs);
    } catch (error: any) {
      console.log("error initing user", error.message);
      throw error;
    }
  };

  return { initAccount };
}

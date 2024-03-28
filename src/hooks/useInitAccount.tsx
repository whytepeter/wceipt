import { getBusinessByID, getBusinessByUserID } from "@/lib/api/businessApi";
import { getProductsByBusiness } from "@/lib/api/productApi";
import {
  BusinessType,
  CustomerType,
  ProductType,
  SalesType,
  UserType,
} from "@/types/types";
import toast from "react-hot-toast";
import { useAppDispatch } from ".";
import { setDataState } from "@/redux/slices/dataSlice";
import { useRouter } from "next/navigation";
import { getSalesByBusiness } from "@/lib/api/salesApi";
import { getCustomersByBusiness } from "@/lib/api/customerApi";
import { getStaffByBusiness } from "@/lib/api/userApi";

export default function useInitAccount() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const initBussiness = async (user: UserType): Promise<BusinessType[]> => {
    try {
      let businesses: BusinessType[] = [];
      const roleName = user?.roleDetails?.name;
      const userId = user?.userId;

      //Check if the user is a Staff
      if (roleName === "Staff") {
        if (!user?.business) {
          toast.error("You don't have any business, please contact admin");
          throw new Error("");
        }

        //Get business attached to the loggedin staff

        const res = await getBusinessByID(user?.business);
        if (!res) {
          toast.error("Your business no longer exist, please contact admin");
          throw new Error("");
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

      const activeBusiness = businesses[0].id;

      dispatch(setDataState({ field: "business", value: businesses }));
      dispatch(
        setDataState({ field: "activeBusiness", value: activeBusiness })
      );

      console.log("Business", businesses);
      return businesses;
    } catch (error) {
      throw error;
    }
  };

  const initProducts = async (businessId: string): Promise<ProductType[]> => {
    try {
      const products = await getProductsByBusiness(businessId);
      dispatch(setDataState({ field: "products", value: products }));
      console.log("Products", products);
      return products;
    } catch (error) {
      throw error;
    }
  };

  const initSales = async (businessId: string): Promise<SalesType[]> => {
    try {
      const sales = await getSalesByBusiness(businessId);
      dispatch(setDataState({ field: "sales", value: sales }));
      console.log("Sales", sales);
      return sales;
    } catch (error) {
      throw error;
    }
  };

  const initCustomer = async (businessId: string): Promise<CustomerType[]> => {
    try {
      const customers = await getCustomersByBusiness(businessId);
      dispatch(setDataState({ field: "customers", value: customers }));
      console.log("customers", customers);
      return customers;
    } catch (error) {
      throw error;
    }
  };

  const initStaffs = async (businessId: string): Promise<UserType[]> => {
    try {
      const staffs = await getStaffByBusiness(businessId);
      dispatch(setDataState({ field: "staffs", value: staffs }));
      console.log("staffs", staffs);
      return staffs;
    } catch (error) {
      throw error;
    }
  };

  const initAccount = async (user: UserType) => {
    try {
      const businesses = await initBussiness(user);

      const businessId = businesses[0]?.id;

      //Get all products By active business
      initProducts(businessId);

      //Get all sales by active business
      initSales(businessId);

      //Get all customers by active business
      initCustomer(businessId);

      //Get all staff by business
      initStaffs(businessId);
    } catch (error: any) {
      console.log("error initing account", error.message);
      throw error;
    }
  };

  return {
    initAccount,
    initBussiness,
    initProducts,
    initSales,
    initCustomer,
    initStaffs,
  };
}

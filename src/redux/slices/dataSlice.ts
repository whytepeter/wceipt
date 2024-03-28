import {
  BusinessType,
  CustomerType,
  ProductType,
  ReceiptType,
  SalesType,
  UserType,
} from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

type InitialState = {
  business: BusinessType[];
  activeBusiness: string;

  customers: CustomerType[];
  products: ProductType[];
  receipts: ReceiptType[];
  sales: SalesType[];
  staffs: UserType[];
};

type setStateType = {
  field: keyof InitialState;
  value: any;
};

const initialState = {
  business: [],
  activeBusiness: "",

  customers: [],
  products: [],
  receipts: [],
  sales: [],
  staffs: [],
} as InitialState;

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataState: (state, action: PayloadAction<setStateType>) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setDataState } = dataSlice.actions;
export default dataSlice.reducer;

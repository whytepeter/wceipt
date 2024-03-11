import {
  BusinessType,
  CustomerType,
  ProductType,
  ReceiptType,
  UserType,
} from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

type InitialState = {
  business: BusinessType[];
  activeBusiness: BusinessType | null;

  customers: CustomerType[];
  products: ProductType[];
  receipts: ReceiptType[];
  staffs: UserType[];
};

type setStateType = {
  field: keyof InitialState;
  value: any;
};

const initialState = {
  business: [],
  activeBusiness: null,

  customers: [],
  products: [],
  receipts: [],
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

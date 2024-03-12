import { Roles, UserType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

type InitialState = {
  isLogin: boolean;
  user: UserType | null;
  roles: Roles | null;
};

type setStateType = {
  field: keyof InitialState;
  value: any;
};

const initialState = {
  isLogin: false,
  user: null,
  roles: null,
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<setStateType>) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    logUserOut: (state) => {
      state.isLogin = false;
      state.user = null;
    },
  },
});

export const { setAuthState, logUserOut } = authSlice.actions;
export default authSlice.reducer;

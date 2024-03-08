import { UserType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isLogin: boolean;
  user: UserType | null;
};

const initialState = {
  isLogin: false,
  user: {},
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserType>) => {
      console.log("");
    },
    loginUser: (state, action: PayloadAction) => {
      console.log("");
    },
    logoutUser: () => {
      return initialState;
    },
    resetPassword: (state, action: PayloadAction<string>) => {},
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

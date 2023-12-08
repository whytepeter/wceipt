import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types/types";

type InitialState = {
  isLogin: Boolean;
  user: UserType | null;
};

const initialState = {
  isLogin: false,

  user: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userId: "",

    password: "",
    createdAt: null,

    verified: false,
    blocked: false,
    deleted: false,
    blockedMessage: "",

    organization: [],
    roles: [],
  },
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

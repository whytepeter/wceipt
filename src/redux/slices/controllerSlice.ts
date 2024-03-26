import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  collapse: boolean;
  currentPage: string;
};

const initialState = {
  collapse: false,
  currentPage: "",
} as InitialState;

export const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    togglecollapse: (state, action: PayloadAction<boolean>) => {
      state.collapse = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { togglecollapse, setCurrentPage } = controllerSlice.actions;
export default controllerSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  collapes: Boolean;
};

const initialState = {
  collapes: false,
} as InitialState;

export const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleCollapes: (state, action: PayloadAction<Boolean>) => {
      state.collapes = action.payload;
    },
  },
});

export const { toggleCollapes } = controllerSlice.actions;
export default controllerSlice.reducer;
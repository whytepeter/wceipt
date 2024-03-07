import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import authReducer from "./slices/authSlice";
import controllerReducer from "./slices/controllerSlice";

export const store = configureStore({
  reducer: {
    authReducer,
    controllerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

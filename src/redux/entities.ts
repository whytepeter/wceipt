import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./slices/authSlice";
import controllerSlice from "./slices/controllerSlice";

export const entitiesReducer = combineReducers({
  auth: authSlice,
  controller: controllerSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, entitiesReducer);

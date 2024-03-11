import { combineReducers } from "redux";

import authSlice from "./slices/authSlice";
import controllerSlice from "./slices/controllerSlice";
import dataSlice from "./slices/dataSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  controller: controllerSlice,
  data: dataSlice,
});

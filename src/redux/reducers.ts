import { combineReducers } from "redux";

import authSlice from "./slices/authSlice";
import controllerSlice from "./slices/controllerSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  controller: controllerSlice,
});

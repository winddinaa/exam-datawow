import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "../reduxs/screenSize/screenSizeSlice";
import authReducer from "../reduxs/auth/authSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

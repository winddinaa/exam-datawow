import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "../reduxs/screenSize/screenSizeSlice";
import authReducer from "../reduxs/auth/authSlice";
import homeReducer from "../reduxs/home/homeSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    auth: authReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

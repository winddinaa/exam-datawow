import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "../reduxs/screenSize/screenSizeSlice";
import authReducer from "../reduxs/auth/authSlice";
import homeReducer from "../reduxs/home/homeSlice";
import pageReducer from "../reduxs/page/pageSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
    auth: authReducer,
    home: homeReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

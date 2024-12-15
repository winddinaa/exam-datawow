import { configureStore } from "@reduxjs/toolkit";
import screenSizeReducer from "../reduxs/screenSize/screenSizeSlice";

export const store = configureStore({
  reducer: {
    screenSize: screenSizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

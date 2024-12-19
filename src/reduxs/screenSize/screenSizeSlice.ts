import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenState {
  isLargeScreen: boolean;
}

const initialState: ScreenState = {
  isLargeScreen: false,
};

const screenSizeSlice = createSlice({
  name: "screenSize",
  initialState,
  reducers: {
    setScreenSize(state, action: PayloadAction<boolean>) {
      state.isLargeScreen = action.payload;
    },
  },
});

export const { setScreenSize } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;

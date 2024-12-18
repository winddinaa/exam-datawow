// screenSizeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  openModal: boolean;
}

const initialState: HomeState = {
  openModal: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<boolean>) {
      state.openModal = action.payload;
    },
  },
});

export const { setModal } = homeSlice.actions;
export default homeSlice.reducer;

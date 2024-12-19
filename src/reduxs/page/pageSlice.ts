import { EPage } from "@/utils/constants/common";
import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  page: EPage;
}

const initialState: PageState = {
  page: EPage.HOME,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = homeSlice.actions;
export default homeSlice.reducer;

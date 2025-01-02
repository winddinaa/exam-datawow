import { EPage } from "@/utils/constants/common";
import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  page: EPage;
  oldPage: EPage;
}

const initialState: PageState = {
  page: EPage.HOME,
  oldPage: EPage.HOME,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setPage(state, action) {
      state.oldPage = state.page;
      state.page = action.payload;
    },
    setBack(state) {
      let page = state.page;
      state.page = state.oldPage;
      state.oldPage = page;
      state.oldPage;
    },
  },
});

export const { setPage, setBack } = homeSlice.actions;
export default homeSlice.reducer;

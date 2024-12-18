// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  openModal: boolean;
  loading: boolean;
  error: any;
}

const initialState: HomeState = {
  openModal: false,
  loading: false,
  error: "",
};

export const requestCreatePost = createAsyncThunk(
  "api/requestCreatePost",
  async (option: IoptionAPI) => {
    const data = await apiRequest(option);
    console.log("=> data", data);
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<boolean>) {
      state.openModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestCreatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestCreatePost.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(requestCreatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setModal } = homeSlice.actions;
export default homeSlice.reducer;

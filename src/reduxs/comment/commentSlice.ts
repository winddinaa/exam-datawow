import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommentState {
  isComment: boolean;
  loading: boolean;
  error: any;
}

const initialState: CommentState = {
  isComment: false,
  loading: false,
  error: "",
};

export const requestCreateComment = createAsyncThunk(
  "api/requestCreateComment",
  async (option: IoptionAPI) => {
    const data = await apiRequest(option);

    return data;
  }
);

const CommentSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setOpenComent(state, action: PayloadAction<boolean>) {
      state.isComment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestCreateComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestCreateComment.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(requestCreateComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setOpenComent: setOpenComment } = CommentSlice.actions;
export default CommentSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const CommentSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setOpenComent(state, action: PayloadAction<boolean>) {
      state.isComment = action.payload;
    },
  },
});

export const { setOpenComent: setOpenComment } = CommentSlice.actions;
export default CommentSlice.reducer;

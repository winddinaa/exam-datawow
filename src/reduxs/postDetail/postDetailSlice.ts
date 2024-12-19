// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { IPost } from "@/utils/interface/post.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Comment interface if not defined already

interface IPostDetailState {
  postDetail: IPost;
  loading: boolean;
  error: any;
}

const initialState: IPostDetailState = {
  postDetail: {
    _id: "",
    title: "",
    content: "",
    author: { _id: "", username: "" },
    comments: [],
    community: "",
  },
  loading: false,
  error: "",
};

const postDetailSlice = createSlice({
  name: "postDetail",
  initialState,
  reducers: {
    setPostDetail(state, action: PayloadAction<IPost>) {
      state.postDetail = action.payload;
    },
  },
});

export const { setPostDetail } = postDetailSlice.actions;
export default postDetailSlice.reducer;

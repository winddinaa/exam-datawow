// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OurBlogState {
  openModal: boolean;
  loading: boolean;
  error: any;
  editPostTemp: Post;
}

interface Post {
  title: string;
  content: string;
  community?: string;
  _id: string;
}

const initialState: OurBlogState = {
  openModal: false,
  loading: false,
  error: "",
  editPostTemp: {
    title: "",
    content: "",
    community: undefined,
    _id: "",
  },
};

export const requestEditPost = createAsyncThunk(
  "api/requestEditPost",
  async (option: IoptionAPI) => {
    const data = await apiRequest(option);
    return data;
  }
);

const ourBlogSlice = createSlice({
  name: "ourBlog",
  initialState,
  reducers: {
    setModalEdit(state, action: PayloadAction<boolean>) {
      state.openModal = action.payload;
    },
    setEditPost(
      state,
      action: PayloadAction<{ openModal: boolean; post: Post }>
    ) {
      state.openModal = action.payload.openModal;
      state.editPostTemp = action.payload.post;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestEditPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestEditPost.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(requestEditPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setEditPost, setModalEdit } = ourBlogSlice.actions;
export default ourBlogSlice.reducer;

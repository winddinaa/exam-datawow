// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OurBlogState {
  openModal: boolean;
  openModalConfirm: boolean;
  loading: boolean;
  error: any;
  editPostTemp: Post;
  _idDelete: string;
}

interface Post {
  title: string;
  content: string;
  community?: string;
  _id: string;
}

const initialState: OurBlogState = {
  openModal: false,
  openModalConfirm: false,
  loading: false,
  error: "",
  _idDelete: "",
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

export const requestDeletePost = createAsyncThunk(
  "api/requestDeletePost",
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
    setModalConfirmDelete(state, action: PayloadAction<boolean>) {
      state.openModalConfirm = action.payload;
    },
    setEditPost(
      state,
      action: PayloadAction<{ openModal: boolean; post: Post }>
    ) {
      state.openModal = action.payload.openModal;
      state.editPostTemp = action.payload.post;
    },
    setDeletePost(
      state,
      action: PayloadAction<{ openModalConfirm: boolean; _idDelete: string }>
    ) {
      state.openModalConfirm = action.payload.openModalConfirm;
      state._idDelete = action.payload._idDelete;
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
      })
      .addCase(requestDeletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestDeletePost.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(requestDeletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setEditPost,
  setModalEdit,
  setModalConfirmDelete,
  setDeletePost,
} = ourBlogSlice.actions;
export default ourBlogSlice.reducer;

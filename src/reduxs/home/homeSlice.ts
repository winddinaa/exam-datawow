// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  openModal: boolean;
  loading: boolean;
  error: any;
  post: Post[];
}

interface Author {
  _id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Post {
  _id: string;
  title: string;
  content: string;
  author: Author;
  comments: Comment[];
  community: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const initialState: HomeState = {
  openModal: false,
  loading: false,
  error: "",
  post: [],
};

export const requestCreatePost = createAsyncThunk(
  "api/requestCreatePost",
  async (option: IoptionAPI) => {
    const data = await apiRequest(option);
    return data;
  }
);

export const getPost = createAsyncThunk(
  "api/getPost",
  async (option: IoptionAPI) => {
    const data = await apiRequest(option);
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setModalCreate(state, action: PayloadAction<boolean>) {
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
      })

      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.post = action.payload.data;
        state.loading = false;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setModalCreate } = homeSlice.actions;
export default homeSlice.reducer;

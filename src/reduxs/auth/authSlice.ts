// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token?: string;
  loading: boolean;
  error?: string;
}

const initialState: AuthState = {
  token: "",
  loading: false,
  error: "",
};

export const requestLogin = createAsyncThunk(
  "api/login",
  async (option: IoptionAPI) => {
    console.log("=>option", option);
    const data = await apiRequest(option);

    return data;
  }
);

const authSlice = createSlice({
  name: "token",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(requestLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(requestLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;

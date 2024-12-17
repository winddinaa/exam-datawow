// screenSizeSlice.ts
import { apiRequest } from "@/utils/api/api";
import { IoptionAPI } from "@/utils/api/api.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token?: string;
  loading: boolean;
  error?: string;
  username?: string;
}

const initialState: AuthState = {
  token: "",
  username: "",
  loading: false,
  error: "",
};

export const requestLogin = createAsyncThunk(
  "api/login",
  async (option: IoptionAPI) => {
    const data = await apiRequest(option);
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("username", data.username);
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
      .addCase(requestLogin.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(requestLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from './dashboardHomePageAPI';

interface dashboardHomePageState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initialState: dashboardHomePageState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchdashboardHomePageData = createAsyncThunk(
  'feature1/fetchData',
  async () => {
    const response = await fetchData();
    return response.data;
  }
);

const feature1Slice = createSlice({
  name: 'feature1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdashboardHomePageData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchdashboardHomePageData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchdashboardHomePageData.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch data';
        state.loading = false;
      });
  },
});

export const feature1Reducer = feature1Slice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch data from a given URL
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

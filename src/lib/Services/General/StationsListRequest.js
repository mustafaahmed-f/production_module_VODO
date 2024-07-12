import { createAsyncThunk } from "@reduxjs/toolkit";

export const MoviesRequest = createAsyncThunk(
  "MoviesRequest",
  async (arg, { rejectWithValue }) => {
    try {
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const MoviesRequestHandler = (builder) => {
  builder
    .addCase(MoviesRequest.pending, (state, action) => {
      state.movies.loading = true;
    })
    .addCase(MoviesRequest.fulfilled, (state, action) => {
      state.movies.loading = false;
      state.movies.list = action.payload;
    })
    .addCase(MoviesRequest.rejected, (state, action) => {
      state.movies.loading = false;
      state.movies.error = action.payload;
    });
};

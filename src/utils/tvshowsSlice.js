import { createSlice } from "@reduxjs/toolkit";

const tvshowsSlice = createSlice({
  name: "TV Show",
  initialState: {
    tvshows: null,
  },
  reducers: {
    addTvShows: (state, action) => {
      state.tvshows = action.payload;
    },
  },
});
export const { addTvShows } = tvshowsSlice.actions;
export default tvshowsSlice.reducer;

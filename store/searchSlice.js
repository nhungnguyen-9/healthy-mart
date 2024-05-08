import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export const selectSearchQuery = (state) => state.search.searchQuery;
export default searchSlice.reducer;

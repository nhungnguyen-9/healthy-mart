import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // getUser: (state) => {
    //   state.user = action.user;
    // },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

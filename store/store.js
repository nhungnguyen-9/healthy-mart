import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice";
import searchSlice from "./searchSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    search: searchSlice,
  },
});

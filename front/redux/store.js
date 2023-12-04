import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalSlice";
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
    preferencesModal: modalSlice.reducer,
    auth: authSlice.reducer,
    
  }
})
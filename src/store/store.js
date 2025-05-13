import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../store/showSlice";
import authReducer from "../store/authSlice";

const store = configureStore({
  reducer: {
    showReducer,
    authReducer,
  },
});

export default store;

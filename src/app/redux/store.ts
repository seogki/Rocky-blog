import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";
import commonReducer from "./features/commonSlice";

export const store = configureStore({
  reducer: {
    headerReducer,
    commonReducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

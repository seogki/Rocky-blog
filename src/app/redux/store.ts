import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";
import editReducer from "./features/editSlice";
import postReducer from "./features/postSlice";
export const store = configureStore({
  reducer: {
    headerReducer,
    editReducer,
    postReducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

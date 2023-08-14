import { Category } from "@/app/interface/posts.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HeaderState = {
  isMore: boolean;
  isDrawerOpen: boolean;
};

const initialState = {
  isMore: false,
  isDrawerOpen: false
} as HeaderState;

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    },
    openMore: (state) => {
      state.isMore = true;
    },
    closeMore: (state) => {
      state.isMore = false;
    }
  }
});

export const { openDrawer, closeDrawer, openMore, closeMore } =
  headerSlice.actions;

export default headerSlice.reducer;

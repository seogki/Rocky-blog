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
    },
    openAll: (state) => {
      state.isMore = true;
      state.isDrawerOpen = true;
    },
    closeAll: (state) => {
      state.isMore = false;
      state.isDrawerOpen = false;
    }
  }
});

export const {
  openDrawer,
  closeDrawer,
  openMore,
  closeMore,
  openAll,
  closeAll
} = headerSlice.actions;

export default headerSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  path: string;
};

const initialState = {
  path: ""
} as State;

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setPath: (state, { payload }: PayloadAction<string>) => {
      state.path = payload;
    }
  }
});

export const { setPath } = commonSlice.actions;

export default commonSlice.reducer;

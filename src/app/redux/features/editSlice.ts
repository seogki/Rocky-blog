import { Category } from "@/app/interface/posts.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EditState = {
  tagKey?: string;
};

const initialState = {} as EditState;

export const edit = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setTagKey: (state, action: PayloadAction<string>) => {
      state.tagKey = action.payload;
    }
  }
});

export const { setTagKey } = edit.actions;

export default edit.reducer;

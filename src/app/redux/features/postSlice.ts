import {
  Category,
  Post,
  SavePostPayload
} from "@/app/interface/posts.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PostState = {
  isLoading: boolean;
  error: any;
  success: boolean;
  post: Post;
};

const initialState = {} as PostState;

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    savePost: (state, { payload }: PayloadAction<SavePostPayload>) => {
      state.isLoading = true;
    },
    savePostSuccess: (state, { payload }: PayloadAction<boolean>) => {
      state.success = payload;
      state.isLoading = false;
    },
    savePostFailure: (state, { payload }: PayloadAction<any>) => {
      state.error = payload;
      state.isLoading = false;
    }
  }
});

export const { savePost, savePostFailure, savePostSuccess } = postSlice.actions;

export default postSlice.reducer;

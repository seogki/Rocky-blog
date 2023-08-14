import { Category, Post } from "@/app/interface/posts.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PostState = {
  post?: Post;
};

const initialState = {} as PostState;

export const post = createSlice({
  name: "post",
  initialState,
  reducers: {}
});

export const {} = post.actions;

export default post.reducer;

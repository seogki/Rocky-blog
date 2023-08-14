import * as API from "@/app/api/posts";
import { SavePostPayload } from "@/app/interface/posts.interface";
import { PayloadAction } from "@reduxjs/toolkit";
import { savePostFailure, savePostSuccess, savePost } from "./postSlice";
import { all, call, fork, put, takeLatest } from "@redux-saga/core/effects";

function* savePostSaga({ payload }: PayloadAction<SavePostPayload>) {
  try {
    const result: boolean = yield call(API.savePost, payload);
    yield put(savePostSuccess(result));
  } catch (err: any) {
    yield put(savePostFailure(err));
  }
}

function* watchSavePostSaga() {
  yield takeLatest(savePost.type, savePostSaga);
}

export default function* PostSaga() {
  yield all([fork(watchSavePostSaga)]);
}

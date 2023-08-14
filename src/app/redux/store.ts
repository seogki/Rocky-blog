import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";
import editReducer from "./features/editSlice";
import postReducer from "./features/postSlice";
import createSagaMiddleware from "@redux-saga/core";
import { all, call } from "@redux-saga/core/effects";
import PostSaga from "./features/postSaga";
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([call(PostSaga)]);
}

export const store = configureStore({
  reducer: {
    headerReducer,
    editReducer,
    postReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

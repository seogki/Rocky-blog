import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";
import editReducer from "./features/editSlice";
import createSagaMiddleware from "@redux-saga/core";
import { all, call } from "@redux-saga/core/effects";
const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([call(PostSaga)]);
// }

export const store = configureStore({
  reducer: {
    headerReducer,
    editReducer
  },
  devTools: process.env.NODE_ENV !== "production"
  // middleware: [sagaMiddleware]
});

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

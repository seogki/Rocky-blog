import {
  PreloadedState,
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";

const rootReducer = combineReducers({
  header: headerReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production"
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

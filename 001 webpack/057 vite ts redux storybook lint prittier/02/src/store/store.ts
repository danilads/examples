import { configureStore, combineReducers } from "@reduxjs/toolkit";
import testSlice from "./reducers/test";
import translateSlice from "./reducers/translate";

const rootReducer = combineReducers({
  test: testSlice,
  translate: translateSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

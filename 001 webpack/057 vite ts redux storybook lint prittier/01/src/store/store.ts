import { configureStore, combineReducers } from "@reduxjs/toolkit";
import itemsSlice from "./reducers/test";

const rootReducer = combineReducers({
  test: itemsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

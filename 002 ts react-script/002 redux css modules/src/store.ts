import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './actionReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//для typescript чтобы не писать типы в redux.state
export type RootState = ReturnType<typeof store.getState>;

//
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

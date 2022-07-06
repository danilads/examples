import { configureStore, combineReducers } from '@reduxjs/toolkit';
import itemsSlice from "./reducers/items";

const combine = combineReducers({
	items: itemsSlice
});

const store = configureStore({
	reducer: combineReducers({
		items: itemsSlice
	})
});

export type TypeDispatch = typeof store.dispatch;
export type TypeState = ReturnType<typeof combine>;


export default store;

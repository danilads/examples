import { configureStore, combineReducers } from '@reduxjs/toolkit';
import itemsSlice from "./reducers/items";


const store = configureStore({
	reducer: combineReducers({
		items: itemsSlice
	})
});

// type script
// export type StoreDispatch = typeof store.dispatch;

export default store;

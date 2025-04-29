import { configureStore, combineReducers } from '@reduxjs/toolkit';
import itemsSlice from "./reducers/items";


const store = configureStore({
	reducer: combineReducers({
		items: itemsSlice
	})
});

export default store;

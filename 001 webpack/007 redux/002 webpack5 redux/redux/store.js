//redux
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import items from "./reducers/items";
import text from "./reducers/text";

//нужно создавать разные редюсеры
//т.к. мы меняем внутри иммутабельно
//при изменении везде где используется redux прилетят новые props
const store = configureStore({
	reducer: combineReducers({
		items,
		text
	})
});

// export type StoreDispatch = typeof store.dispatch;

export default store;

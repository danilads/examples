//redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import items from "./reducers/items";
import text from "./reducers/text";

//middlewares для работы асинхронных action's
import thunk from 'redux-thunk';

//нужно создавать разные редюсеры
//т.к. мы меняем внутри иммутабельно
//при изменении везде где используется redux прилетят новые props
const store = createStore(
	combineReducers({items,text}),
  	composeWithDevTools(
		applyMiddleware(thunk)
	  )
);

export default store;
/*
const store = createStore(
	reducer,
	applyMiddleware(thunk)
  );
*/

/*
const enhancer = applyMiddleware(thunk);
const composeEnhancers = composeWithDevTools({
	// Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(combineReducers({
	reducer,
	}), composeEnhancers(
		enhancer,
	// other store enhancers if any
));*/
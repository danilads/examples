//redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";

//middlewares для работы асинхронных action's
import thunk from 'redux-thunk';

const store = createStore(
	combineReducers({reducer}),
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
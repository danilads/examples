//redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rdHeroes from "./reducers/rdHeroes";
import rdModal from "./reducers/rdModal";

//middlewares для работы асинхронных action's
import thunk from 'redux-thunk';


//отключаем redux dev tools в production
let store; 
if(process.env.NODE_ENV==='development'){
	store = createStore(
		combineReducers({
			rdHeroes,
			rdModal
		}),
		  composeWithDevTools(
			applyMiddleware(thunk)
		  )
	);
}
else if(process.env.NODE_ENV==='production'){
	store = createStore(
		combineReducers({
			rdHeroes,
			rdModal
		}),
		applyMiddleware(thunk)
		  
	);
}

export default store;

//redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./reducers";


//middlewares для работы асинхронных action's
import thunk from 'redux-thunk';

//нужно создавать разные редюсеры
//т.к. мы меняем внутри иммутабельно
//при изменении везде где используется redux прилетят новые props

const store = createStore(
	combineReducers({reducers}),
  	composeWithDevTools(
		applyMiddleware(thunk)
	  )
);

export default store;

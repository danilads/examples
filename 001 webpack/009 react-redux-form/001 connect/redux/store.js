//redux
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers";



//middlewares для работы асинхронных action's
import thunk from 'redux-thunk';

//react-redux-form
import { combineForms } from 'react-redux-form';



const initialUser = { name: '' };

//обязательно нужно объялять форму (user)
const store = createStore(
	combineReducers({
		reducer,
  	forms: combineForms( {
			user: initialUser,
			},'forms')}),
	composeWithDevTools(
	applyMiddleware(thunk)
	)
);

/*
const store = createStore(combineForms({
	user: initialUser,
}),
composeWithDevTools(
	applyMiddleware(thunk)
));
*/


/*
let store = createStore(
	combineReducers({
		reducer,
		forms: combineForms( {
		user: initialUser,
    },'forms')}),
  	composeWithDevTools(
		applyMiddleware(thunk)
	  )
);
*/
/*
let store = createStore(
	combineReducers( {
	  errorsEvent,
	  forms: combineForms( {
		PAYMENT_ORDER: rdPayment,
		newCorrespondent,
	  }, 'forms' ),
	  search
	} ),
	composeWithDevTools(
	  applyMiddleware( routerMiddleware( history ) ),
	  applyMiddleware( reduxThunk ),
	  reduxBatch
	)
*/


export default store;
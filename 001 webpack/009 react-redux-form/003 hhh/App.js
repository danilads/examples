//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./redux/reducers";



//middlewares для работы асинхронных action's
import thunk from 'redux-thunk';

//components
import Block_MainPage from './components/Block_MainPage';


//react-redux-form
import { combineForms,createForms } from 'react-redux-form';

const initialUser = { name: '' };

/*
const store = createStore(combineForms({
	user: initialUser,
}),
composeWithDevTools(
	applyMiddleware(thunk)
));
*/


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


ReactDOM.render(
	<Provider store={store}>
		<Block_MainPage/>
	</Provider>
	
	
	, document.getElementById('container') 
);


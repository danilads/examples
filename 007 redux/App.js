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

//store
import store from './redux/store';
//css
import './scss/main.scss';

ReactDOM.render(
	
	<Provider store={store}>
		<Block_MainPage/>
	</Provider>
	
	, document.getElementById('container') 
);


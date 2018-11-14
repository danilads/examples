//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";

//redux
import { Provider } from 'react-redux';

//components
import Block_MainPage from './components/Block_MainPage';

//store
import store from './redux/store';
ReactDOM.render(
	<Provider store={store}>
		<Block_MainPage/>
	</Provider>
	
	
	, document.getElementById('container') 
);

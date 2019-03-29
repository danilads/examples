//react
import React from 'react';
import ReactDOM from 'react-dom';

//components
import AaaMainPage from './components/AaaMainPage';

//для работы async / await
import "babel-polyfill";


//redux
import { Provider } from 'react-redux';

//store
import store from './redux/store';
//css
import './scss/main.scss';

ReactDOM.render(
	
	<Provider store={store}>
		<AaaMainPage/>
	</Provider>
	
	, document.getElementById('container') 
);


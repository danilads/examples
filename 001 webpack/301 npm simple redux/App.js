//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//components
import Block_MainPage from './components/Block_MainPage';

//store

//css
import './scss/main.scss';

//simple provider
import SimpleProvider from './react-redux-simple/SimpleProvider';

ReactDOM.render(
	
	<SimpleProvider>
		<Block_MainPage/>
	</SimpleProvider>
	
	, document.getElementById('container') 
);


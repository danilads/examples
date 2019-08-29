//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//components
import Block_MainPage from './components/Block_MainPage';

//css
import './scss/main.scss';

ReactDOM.render(
	<Block_MainPage/>
	, document.getElementById('container') 
);


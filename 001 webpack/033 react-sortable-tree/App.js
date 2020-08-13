//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//components
import Main from './components/Main';

//css
import './scss/main.scss';


//idle в компоненте layout
ReactDOM.render(
	<Main/>
	, document.getElementById('container') 
);


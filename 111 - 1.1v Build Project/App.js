//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//redux
import { Provider } from 'react-redux';

//route
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

//components
import Page_Main from './01_pages/Page_Main';
import Page_Filter from './01_pages/Page_Filter';
import Page_Selected from './01_pages/Page_Selected';

//store
import store from './redux/store';

//css
import './scss/main.scss';


ReactDOM.render(
	
	<Provider store={store}>
		<BrowserRouter>
			<React.Fragment>
				<Route path="/" exact component={Page_Main} />
				<Route path="/filter" component={Page_Filter} />
				<Route path="/selected" component={Page_Selected} />
			</React.Fragment>
		</BrowserRouter>
	</Provider>
	
	, document.getElementById('container') 
);


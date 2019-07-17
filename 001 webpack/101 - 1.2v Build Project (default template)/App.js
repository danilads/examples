//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//redux
import { Provider } from 'react-redux';

//route
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

//layout
import Layout from './02_components/Layout';

//components
import Page_Main from './01_pages/Page_Main';
import Page_About from './01_pages/Page_About';

//store
import store from './redux/store';

//css
import './style/main.scss';


ReactDOM.render(
	
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Page_Main} />
				<Layout>
					<Switch>
						<Route path="/about" component={Page_About} />
					</Switch>
				</Layout>
			</Switch>
		</BrowserRouter>
	</Provider>
	
	, document.getElementById('container') 
);


//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//redux
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

//route
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

//layout
import Layout from './02_components/Layout/Layout';

//components
import PageMain from './01_pages/PageMain/PageMain';
import PageAbout from './01_pages/PageAbout/PageAbout';
import PageSome from './01_pages/PageSome/PageSome';

//store
import store from './redux/store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory(), store);


//css
import './style/main.scss';


ReactDOM.render(
	
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route path="/" exact component={PageMain} />
				<Layout>
					<Route path="/about" component={PageAbout} />
					<Route path="/some" component={PageSome} />
				</Layout>
			</Switch>
		</Router>
	</Provider>
	
	, document.getElementById('container') 
);


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
import Layout from './02_components/Layout/Layout';

//components
import PageMain from './01_pages/PageMain/PageMain';
import PageAbout from './01_pages/PageAbout/PageAbout';

//store
import store from './redux/store';

//css
import './style/main.scss';


ReactDOM.render(
	
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={PageMain} />
				<Layout>
					<Switch>
						<Route path="/about" component={PageAbout} />
					</Switch>
				</Layout>
			</Switch>
		</BrowserRouter>
	</Provider>
	
	, document.getElementById('container') 
);


//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";



//redux
import { Provider } from 'react-redux';

//components
import Block_MainPage from './components/Block_MainPage';
import Block_PageOne from './components/Block_PageOne';
import Layout from './components/Layout';

//store
import store from './redux/store';
//css
import './scss/main.scss';


//router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store);
history.listen(location => console.log(location.pathname));


//idle в компоненте layout
ReactDOM.render(
	
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={ Layout }>
                <IndexRoute component={ Block_MainPage }/>
            </Route>

			<Route path='/pageOne' component={ Layout }>
                <IndexRoute component={ Block_PageOne }/>
            </Route>

		</Router>
	</Provider>
	
	, document.getElementById('container') 
);


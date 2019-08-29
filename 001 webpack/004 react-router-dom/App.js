//react
import React from 'react';
import ReactDOM from 'react-dom';

import Block_Main from './components/Block_Main';
import Block_Page from './components/Block_Page';
//css
import './scss/main.scss';
//route
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';

//так можно отправить пропсы по ссылке
//<Route path="/:sbol/request-card-link" render={props => <Page_RequestCard {...props} actual/>}/>
ReactDOM.render(
	<BrowserRouter>
			<Switch>
				<Layout>
					<Route path="/" exact component={Block_Main} />
					<Route path="/page" component={Block_Page} />
					<Route path="/page-props" render={props => <Block_Page send={true}/>}/>
				</Layout>
			</Switch>
		</BrowserRouter>
	, document.getElementById('container') 
);


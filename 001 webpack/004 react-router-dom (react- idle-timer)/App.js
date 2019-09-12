//react
import React from 'react';
import ReactDOM from 'react-dom';

import Block_Main from './components/Block_Main';
import Block_Page from './components/Block_Page';
//css
import './scss/main.scss';
//route
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import Layout from './components/Layout';

//так можно отправить пропсы по ссылке
//<Route path="/:sbol/request-card-link" render={props => <Page_RequestCard {...props} actual/>}/>


//react-idle-timer
import IdleTimer from 'react-idle-timer';
//создаем историю(чтобы можно было редирект сделать)
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

//срабатывает когда таймер вышел
function onIdle (){
	console.log('---onIdle');
	//logout
	history.push('/page-props')
}
//срабатывает при действиях
function onAction (){
	console.log('---onAction',history);
}
ReactDOM.render(
	<BrowserRouter>
		<div>
			<IdleTimer
				element={document}
			
				onIdle={onIdle}
				onAction={onAction}
			
				timeout={1000 * 60 * 3}
			/>
			<Switch>
				<Layout>
					<Route path="/" exact component={Block_Main} />
					<Route path="/page" component={Block_Page} />
					<Route path="/page-props" render={props => <Block_Page send={true}/>}/>
				</Layout>
			</Switch>
		</div>
		</BrowserRouter>
	, document.getElementById('container') 
);


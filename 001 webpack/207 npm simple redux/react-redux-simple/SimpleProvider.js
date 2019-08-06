import React from 'react';

import { Provider } from 'react-redux';

import store from './store';
class SimpleProvider extends React.PureComponent {

  	render() {
		return (
			<Provider store={store}>
                {this.props.children}
			</Provider>
		);

  	}

}


export default SimpleProvider
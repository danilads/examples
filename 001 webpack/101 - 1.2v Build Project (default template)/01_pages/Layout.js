import React from 'react';

import './Layout.scss';

class Layout extends React.PureComponent {


  	render() {
		console.log('---this.props',this.props)
		return (
			
			<div className="Layout">
				{this.props.children}
			</div>
		);
  	}
}


export default Layout;
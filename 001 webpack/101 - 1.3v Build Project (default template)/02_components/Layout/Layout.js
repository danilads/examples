import React from 'react';

import './Layout.scss';

class Layout extends React.PureComponent {


  	render() {
		console.log('---this.props',this.props)
		return (
			
			<div className="Layout">
				<div style={{color:'red'}}>LAYOUT</div>
				<div>{this.props.children}</div>
			</div>
		);
  	}
}


export default Layout;
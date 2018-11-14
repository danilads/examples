import React from 'react';
import { NavLink } from 'react-router-dom';

class Block_Main extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<div>
				<div>~~Main~~</div>
				<div><NavLink to="/page" activeClassName="SActivated">Page</NavLink></div>
				<div><NavLink to="/page-props" activeClassName="SActivated">Page-props</NavLink></div>
				
			</div>
		);

  	}

}



export default Block_Main;

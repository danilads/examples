import React from 'react';
import { NavLink } from 'react-router-dom';

class Page_Selected extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<div>
				<div>~~Selected~~</div>
				<NavLink to="/" activeClassName="SActivated">back</NavLink>
			</div>
		);

  	}

}



export default Page_Selected;

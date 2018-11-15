import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page_Main.scss';

class Page_Main extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<div className="Page_Main">
				<div>~~Main~~</div>
				<div>league</div>
				<div>enter portal</div>
				<div><NavLink to="/content" activeClassName="SActivated">Dota content</NavLink></div>
			</div>
		);

  	}

}



export default Page_Main;

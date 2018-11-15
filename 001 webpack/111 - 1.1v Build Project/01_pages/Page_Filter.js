import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page_Filter.scss';
class Page_Filter extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		console.log('hi');
		return (
			
			<div className="Page_Filter container">
				<div>~~Filter~~</div>
				<NavLink to="/" activeClassName="SActivated">back</NavLink>
				<div className="row">
					<div className="col-sm-3 main">1</div>
					<div className="col-sm-3 main-bold">2</div>
					<div className="col-sm-3">3</div>
					<div className="col-sm-3">4</div>
				</div>
			</div>
			
		);

  	}

}



export default Page_Filter;

import React from 'react';
import { NavLink } from 'react-router-dom';

class Block_Page extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		console.log(this.props.send);
		return (
			
			<div>
				<div>~~Page~~</div>
				<NavLink to="/" activeClassName="SActivated">back</NavLink>
				{this.props.send&&<div>Props Was Send</div>}
			</div>
			
		);

  	}

}



export default Block_Page;

import React from 'react';

import './Position.scss';
class Position_Heroes extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		let {data} = this.props;
		console.log('render heroes');
		return (
			<div className="Position Heroes">
				<div>{data.name}</div>
			</div>		
		);

  	}

}



export default Position_Heroes;

import React from 'react';

import './Position.scss';
class Position_Items extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		let {data} = this.props;
		//console.log('render heroes');
		return (
			<div className="Position Items">
				<div>{data.dname}</div>
			</div>		
		);

  	}

}



export default Position_Items;

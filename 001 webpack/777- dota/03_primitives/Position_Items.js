import React from 'react';

import './Position.scss';
class Position_Items extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data} = this.props;

		console.log('--d',data);
		return (
			<div className="Position">
				<div>items</div>
			</div>		
		);

  	}

}



export default Position_Items;

import React from 'react';

import './Position.scss';
class Position_Items extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data, status} = this.props;
		console.log('--s',status.slice(2));
		console.log('--d',data);
		return (
			<div className="Position">
				<div className={"content"+status.slice(2)}>items</div>
			</div>		
		);

  	}

}



export default Position_Items;

import React from 'react';

import './Position.scss';
class Position_Heroes extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data} = this.props;
		return (
			<div className="Position">
				<div>heroes</div>
			</div>		
		);

  	}

}



export default Position_Heroes;

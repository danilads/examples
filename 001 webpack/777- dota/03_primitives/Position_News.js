import React from 'react';

import './Position.scss';
class Position_News extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data, status} = this.props;
		
		console.log('--d',data);
		return (
			<div className="Position">
				<div>{data.title}</div>
			</div>		
		);

  	}

}



export default Position_News;

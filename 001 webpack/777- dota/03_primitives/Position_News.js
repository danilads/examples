import React from 'react';

import './Position.scss';
class Position_News extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		let {data} = this.props;
		//console.log('render news');
		return (
			<div className="Position News">
				<div>{data.title}</div>
			</div>		
		);

  	}

}



export default Position_News;

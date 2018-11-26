import React from 'react';

import './Position_News.scss';
class Position_News extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data, status} = this.props;
		console.log('--1',data);
		console.log('--1',status);
		return (
			
			<div className="Position_News">
				<div>news</div>
			</div>
			
		);

  	}

}



export default Position_News;

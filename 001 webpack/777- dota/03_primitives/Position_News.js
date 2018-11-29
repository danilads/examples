import React from 'react';

import './Position.scss';
class Position_News extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data} = this.props;
		
		console.log('render news');
		return (
			<div className="Position" style={{border:'1px solid white'}}>
				<div>{data.title}</div>
			</div>		
		);

  	}

}



export default Position_News;

import React from 'react';

import './Position.scss';
class Position_News extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data, status} = this.props;
		return (
			<div className="Position">
				<div className={"content"+status.slice(2)}>news</div>
			</div>		
		);

  	}

}



export default Position_News;

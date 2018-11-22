import React from 'react';

import './NewsBlock.scss';
class NewsBlock extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		return (
			
			<div className="NewsBlock">
				<div>{this.props.title}</div>
			</div>
			
		);

  	}

}



export default NewsBlock;

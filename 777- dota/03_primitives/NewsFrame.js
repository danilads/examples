import React from 'react';

import './NewsFrame.scss';
class NewsFrame extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		return (
			
			<div className="NewsFrame">
				<div>{this.props.title}</div>
			</div>
			
		);

  	}

}



export default NewsFrame;

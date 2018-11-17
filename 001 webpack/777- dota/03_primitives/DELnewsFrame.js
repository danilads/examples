import React from 'react';

import './DELnewsFrame.scss';
class DELnewsFrame extends React.PureComponent {
	
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



export default DELnewsFrame;

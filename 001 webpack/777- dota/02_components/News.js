import React from 'react';

import './News.scss';
class News extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		//console.log('render ',this.props.title);
		let {data, status} = this.props;
		console.log('--1',data);
		console.log('--1',status);
		return (
			
			<div className="News">
				<div>news</div>
			</div>
			
		);

  	}

}



export default News;

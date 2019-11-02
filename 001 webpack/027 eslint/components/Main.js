import React from 'react';

class Main extends React.PureComponent {
	
  	render() {
		  console.log('--helo');
		const n = 123;
		this.setState({hello:2});
		return (<div>
				{n}
			</div>);

  	}

}


export default Main;
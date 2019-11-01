import React from 'react';

class Main extends React.PureComponent {
	
  	render() {
		const n = 123;
		this.setState({hello:1});
		return (<div>
				{n}
			</div>);

  	}

}


export default Main;
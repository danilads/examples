import React from 'react';

import Block_Receive from './Block_Receive';
import Block_Send from './Block_Send';

class Main extends React.PureComponent {

  	render() {

		return (
			<div>
				<div><Block_Send/></div>
				<div><Block_Receive/></div>
			</div>
		);

  	}

}

export default Main;
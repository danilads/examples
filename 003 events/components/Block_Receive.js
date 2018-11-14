import React from 'react';
import {myEvent} from './events';


class Block_Receive extends React.PureComponent {
	
	//включаем слушателя
	componentDidMount = () => {
		myEvent.addListener('Send1',this.receive);
	};
	
	  
	receive = (e) => {
		console.log(e);
	}

  	render() {
		return (
			<div>
				
			</div>
		);

	  }
	  componentWillUnmount = () => {
		myEvent.removeListener('Send1',this.receive);
	  };

}

export default Block_Receive;
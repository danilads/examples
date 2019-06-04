import React from 'react';
import {myEvent} from './events';


class Block_Receive extends React.PureComponent {
	state={
		item: "",
	}
	//включаем слушателя
	componentDidMount = () => {
		myEvent.addListener('Send1',this.receive);
	};
	
	  
	receive = (e) => {
		if(e){
			console.log('---e',e);
			this.setState({item:e});
		}
	}

  	render() {
		return (
			<div>
				{this.state.item}
			</div>
		);

	  }
	  componentWillUnmount = () => {
		myEvent.removeListener('Send1',this.receive);
	  };

}

export default Block_Receive;
import React from 'react';
import {myEvent} from './events';


import Block_Receive from './Block_Receive';



class Block_Send extends React.PureComponent {
	
	//отправляем
	send = () => {
		myEvent.emit('Send1', "hello");
	}

  	render() {

		return (
			<div>
				<input type="button" value="send" onClick={this.send}/>
				<Block_Receive/>
			</div>
		);

  	}

}

export default Block_Send;
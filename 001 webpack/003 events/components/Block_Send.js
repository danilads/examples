import React from 'react';
import {myEvent} from './events';


import Block_Mounted from './Block_Mounted';



class Block_Send extends React.PureComponent {
	
	//отправляем
	send = () => {
		myEvent.emit('Send1', <Block_Mounted text="sometext"/>);
	}

  	render() {

		return (
			<div>
				<input type="button" value="send" onClick={this.send}/>
			</div>
		);

  	}

}

export default Block_Send;
import React,{Fragment} from 'react';

import Ex1 from './Ex1';
class Block_MainPage extends React.PureComponent {
	
	state = {
		value:"",
		atr:1
	};

  	render() {
		console.log('--value',this.state.value);
		console.log('--atr',this.state.atr);
		return (
			<div>
				<select onChange={(e)=>{
						console.log('--wtf is target',e.target);
						console.log('--wtf is currentTarget',e.currentTarget);
						this.setState({atr:e.currentTarget.dataset.atr, value:e.target.value})
					}
				} value={this.state.value}>
					<option data-atr={1}>ex1</option>
					<option data-atr={2}>Пункт 2</option>
				</select>
			</div>
		);

  	}

}



export default Block_MainPage;

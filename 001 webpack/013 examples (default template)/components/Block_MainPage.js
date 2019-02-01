import React,{Fragment} from 'react';

import Ex1 from './Ex1';
import Ex2 from './Ex2';
class Block_MainPage extends React.PureComponent {
	
	state = {
		value:'1',
	};

  	render() {
		console.log('--value',this.state.value);
		return (
			<div style={{padding:'2px'}}>
				<div style={{padding:'4px 0'}}>
					<select value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}>
						<option value={'1'}>Пример 1</option>
						<option value={'2'}>Пример 2</option>
					</select>
				</div>
				<hr/>
				<div>
					{this.state.value==='1'&&<Ex1/>}
					{this.state.value==='2'&&<Ex2/>}
				</div>
			</div>
		);

  	}

}



export default Block_MainPage;

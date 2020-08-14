import React from 'react';
import Ex0 from './ex0';

class Main extends React.Component {
	state={
		ex: '0'
	}

	render() {
		let {ex} = this.state;
		return (
			<div>
				<div>
					<select value={ex} onChange={(e)=>this.setState({ex:e.target.value})}>
						<option value={'0'}>ex0</option>
					</select>
				</div>
				<div>
					{ex==='0' && <Ex0/>}
				</div>
			</div>
		)
	}

}


export default Main;
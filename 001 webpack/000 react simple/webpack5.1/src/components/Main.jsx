import React from 'react';
// Add ex add here
import Ex00 from './Ex00';

class Main extends React.Component {
	state={
		ex: 0
	}

	// Add ex add here
	arr = [0];

	render() {
		let {ex} = this.state;

		return (
			<div>
				<div>
					<select value={ex} onChange={(e)=>{this.setState({ex: +e.target.value})}}>
						{this.arr.map(it => (<option key={it} value={it}>{`ex${it}`}</option>))}
					</select>
				</div>
				<div>
					{/* Add here */}
					{ex===0 && <Ex00/>}
				</div>
			</div>
		)
	}

}


export default Main;
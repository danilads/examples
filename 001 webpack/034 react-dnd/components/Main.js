import React from 'react';
// Add ex add here
import Ex0 from './ex0';
import Ex1 from './ex1';

class Main extends React.Component {
	state={
		ex: 1
	}

	// Add ex add here
	arr = [0,1];

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
					{ex===0 && <Ex0/>}
					{ex===1 && <Ex1/>}
				</div>
			</div>
		)
	}

}


export default Main;
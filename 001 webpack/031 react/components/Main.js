import React from 'react';
import Ex0 from './ex0';
import Ex1 from './ex1';

class Main extends React.Component {
	state={
		ex: 0
	}

	render() {
		let {ex} = this.state;
		return (
			<div>
				<div>
					<select value={ex} onChange={(e)=>this.setState({ex:e.target.value})}>
						<option value={0}>ex0</option>
            <option value={1}>ex1</option>
					</select>
				</div>
				<div>
					{ex===0 && <Ex0/>}
					{ex===1 && <Ex1/>}
				</div>
			</div>
		)
	}

}


export default Main;
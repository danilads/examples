import React from 'react';
// Add ex add here
import Ex00 from './Ex00';
import Ex01 from './Ex01';
import Ex02 from './Ex02';
import {Ex03} from './Ex03';
import {Ex04} from './Ex04';
import {Ex05} from './Ex05';
import {Ex06} from './Ex06';
import {Ex07} from './Ex07';

class Main extends React.Component {
	state={
		ex: 7
	}

	// Add ex add here
	arr = [0,1,2,3,4,5,6,7];

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
					{ex===1 && <Ex01/>}
					{ex===2 && <Ex02/>}
					{ex===3 && <Ex03/>}
					{ex===4 && <Ex04/>}
					{ex===5 && <Ex05/>}
					{ex===6 && <Ex06/>}
					{ex===7 && <Ex07/>}
				</div>
			</div>
		)
	}

}


export default Main;
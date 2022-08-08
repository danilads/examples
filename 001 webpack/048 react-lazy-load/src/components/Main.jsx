import React from 'react';

import Ex01 from './Ex01';
import Ex02 from './Ex02';
import Ex03 from './Ex03';


class Main extends React.PureComponent {
  state={
		ex: 'Ex01'
	}

	render() {
		let {ex} = this.state;
		return (
			<div>
				<div>
					<select value={ex} onChange={(e)=>this.setState({ex:e.target.value})}>
						<option value={'Ex01'}>Ex01</option>
						<option value={'Ex02'}>Ex02</option>
						<option value={'Ex03'}>Ex03</option>
					</select>
				</div>
				<div>
					{ex==='Ex01' && <Ex01/>}
					{ex==='Ex02' && <Ex02/>}
					{ex==='Ex03' && <Ex03/>}
				</div>
			</div>
		)
	}
}

export default Main;
